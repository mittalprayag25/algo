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
          itemname: 'B CBT',
        },
        {
          systemid: 'S',
          itemname: 'RED CBT',
        },
        {
          systemid: 'M',
          itemname: 'Red CBT',
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
          systemid: 'L',
          itemname: 'Red',
        },
        {
          systemid: 'D',
          itemname: 'Red',
        },
        {
          systemid: 'Q',
          itemname: 'Red',
        },
        {
          systemid: 'S',
          itemname: 'Red',
        },
        {
          systemid: 'M',
          itemname: 'Prestige CM',
        },
        {
          systemid: 'B',
          itemname: 'Prestige CM',
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
          systemid: 'M',
          itemname: 'Voyager of the Seas - Royal Caribbean International',
        },
        {
          systemid: 'S',
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
          systemid: 'S',
          itemname: 'Red',
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
    res.end(
      'val:' + JSON.stringify(sortDealsWithSystemId(json.redemptionitems))
    );
  })
  .listen(8080);

function makeList(list) {
  const isRed = true;
  const isPrestige = true;
  const sortedList = sortDeals(list);

  const dealsWithRedPrestigeFilter = filterDeals(sortedList, isRed, isPrestige);

  const redCategoryDeals = groupBySystemId(dealsWithRedPrestigeFilter, 'S');
  const prestigeCategoryDeals = groupBySystemId(
    dealsWithRedPrestigeFilter,
    'M'
  );
  const birthdayCategoryDeals = groupBySystemId(
    dealsWithRedPrestigeFilter,
    'B'
  );

  const dealCategoriesWithoutRedPrestigeBirthday = fetchDealCategoriesWithoutRedPrestigeBirthday(
    dealsWithRedPrestigeFilter
  );

  return composeConditionalList(
    isRed && redCategoryDeals,
    isPrestige && prestigeCategoryDeals,
    birthdayCategoryDeals,
    dealCategoriesWithoutRedPrestigeBirthday
  );
}

function sortDealsWithSystemId(list) {
  let modifiedList = makeList(list);
  console.log('itemsDealsSorting', modifiedList);
  for (let i = 0; i < modifiedList.length; i++) {
    let itemsDealsSorting = orderedList(modifiedList[i].items);

    modifiedList[i].items = itemsDealsSorting;
  }
  return modifiedList;
}

function orderedList(data) {
  // const sortedList = sortDeals(list); need to check
  const sortedList = data;
  const s = groupBySystemId(data, 'S');
  const m = groupBySystemId(data, 'M');
  const b = groupBySystemId(data, 'B');
  const l = groupBySystemId(data, 'L');
  const d = groupBySystemId(data, 'D');
  const remainingDeals = fetchDealsWithoutRequiredCategories(data);
  return composeConditionalDealsList(m)(s)(l)(d)(remainingDeals)(b);
}

function sortDeals(list) {
  return list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
}

function filterDeals(arr, isRed = true, isPrestige = true) {
  return arr.map((b) => {
    b.items = b.items.filter(
      (a) =>
        (a.systemid !== 'S' && a.systemid !== 'M') ||
        (isRed && a.systemid === 'S') ||
        (isPrestige && a.systemid === 'M')
    );
    return b;
  });
}

function groupBySystemId(arr, type) {
  return arr.filter((a) => a.systemid === type);
}

function fetchDealCategoriesWithoutRedPrestigeBirthday(arr) {
  return arr.filter(
    (a) =>
      a.systemid != 'S' &&
      a.systemid != 'M' &&
      a.systemid != 'B' &&
      a.items.length > 0
  );
}

function fetchDealsWithoutRequiredCategories(arr) {
  return arr.filter(
    (a) =>
      a.systemid !== 'S' &&
      a.systemid !== 'M' &&
      a.systemid !== 'B' &&
      a.systemid !== 'L' &&
      a.systemid !== 'D'
  );
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

const composeConditionalDealsList = (a) => (b) => (c) => (d) => (e) => (f) => {
  let list = [];
  list = addDeals(a, list);
  list = addDeals(b, list);
  list = addDeals(c, list);
  list = addDeals(d, list);
  list = addDeals(e, list);
  list = addDeals(f, list);
  return list;
};

const addDeals = (arr, list) => {
  if (arr && arr.length > 0) {
    list.push(...arr);
  }
  return list;
};
