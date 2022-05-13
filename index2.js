var http = require('http');
const { reverse } = require('dns');

const json = {
  redemptionitems: [
    {
      systemid: 'B',
      cattype: 'birthday',
      name: 'Birthday Treats',
      details: '',
      items: [
        {
          systemid: 'B',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'B',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
      ],
    },
    {
      catid: '1',
      systemid: 'M',
      cattype: 'prestige',
      name: 'Prestige Exclusives',
      details: '',
      items: [
        {
          systemid: 'M',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'M',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
      ],
    },
    {
      catid: '3',
      systemid: 'D',
      cattype: 'arts & entertainment ',
      name: 'Arts & Entertainment ',
      details: '',
      items: [
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'M',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
      ],
    },
    {
      catid: '2',
      systemid: 'D',
      cattype: 'beauty',
      name: 'Beauty',
      details: '',
      items: [
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
      ],
    },
    {
      catid: '2',
      systemid: 'S',
      cattype: 'dining',
      name: 'Dining',
      details: '',
      items: [
        {
          systemid: 'S',
          itemname: 'red',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
        {
          systemid: 'B',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
      ],
    },
    {
      catid: '1',
      systemid: 'S',
      cattype: 'red exclusives',
      name: 'Red Exclusives',
      details: '',
      items: [
        {
          systemid: 'S',
          itemname: 'Red',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
      ],
    },
    {
      catid: '3',
      systemid: 'S',
      cattype: 'red: f&b',
      name: 'Red: F&B',
      details: '',
      items: [
        {
          systemid: 'B',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'B',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'S',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
      ],
    },
    {
      catid: '4',
      systemid: 'D',
      cattype: 'travel',
      name: 'Travel',
      details: '',
      items: [
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'D',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'M',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
      ],
    },
  ],
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(json.redemptionitems);
    res.end('val:' + JSON.stringify(makeList(json.redemptionitems)));
  })
  .listen(8080);

function makeList(list) {
  const isRed = true;
  const isPrestige = true;
  const sortedList = sortDeals(list);
  // const redDeals = fetchDealsBasedOnSystemId(sortedList, 'S');
  // const prestigeDeals = fetchDealsBasedOnSystemId(sortedList, 'M');
  // const birthdayDeals = fetchDealsBasedOnSystemId(sortedList, 'B');
  // const allNonPAndRDeals = fetchAllNonPrestigeAndRedDeals(sortedList);
  // return composeConditionalList(
  //   redDeals,
  //   prestigeDeals,
  //   birthdayDeals,
  //   allNonPAndRDeals
  // );
  const redDeals = groupCategoriesByType(sortedList, 'S');
  const prestigeDeals = groupCategoriesByType(sortedList, 'M');

  //above 2 used only for red and prestige
  const birthdayDeals = groupCategoriesByType(sortedList, 'B');

  const allDealsCategoriesWithoutRedAndPrestige = fetchAllNonPrestigeAndRedDealsCategories(
    sortedList
  );

  //console.log(sortedList);
  const allDealsWithoutRedAndPrestige = filterDeals(
    allDealsCategoriesWithoutRedAndPrestige,
    isRed,
    isPrestige
  );

  return composeConditionalList(
    isRed && redDeals,
    isPrestige && prestigeDeals,
    birthdayDeals,
    allDealsWithoutRedAndPrestige
  );
}
function sortDeals(list) {
  return list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
}

function filterDeals(arr, isRed = true, isPrestige = true) {
  return arr.map((b) => {
    b.items = b.items.filter((a) => {
      if (a.systemid !== 'S' && a.systemid !== 'M') {
        return a;
      } else if (isRed && a.systemid === 'S') {
        return a;
      } else if (isPrestige && a.systemid === 'M') {
        return a;
      }
    });
    return b;
  });
}

/** */
function groupCategoriesByType(arr, type) {
  return arr.filter((a) => a.systemid === type);
}

// function fetchDealsBasedOnSystemId(arr, type) {
//   return arr
//     .filter((a) => a.systemid === type)
//     .map((b) => {
//       b.items = b.items.filter((c) => c.systemid === type);
//       return b;
//     });
// }

function fetchAllNonPrestigeAndRedDealsCategories(arr) {
  return arr.filter((a) => a.systemid != 'S' && a.systemid != 'M');
}

function composeConditionalList(redList, prestigeList, birthdayDeals, list) {
  if (redList && redList.length > 0) {
    list.unshift(...redList);
  }
  if (prestigeList && prestigeList.length > 0) {
    list.unshift(...prestigeList);
  }
  if (birthdayDeals && birthdayDeals.length > 0) {
    list.push(...birthdayDeals);
  }
  return list;
}
