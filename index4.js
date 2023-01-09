var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + createDealArr(a));
  })
  .listen(8080);

let a = [
  {
    categoryId: 'M',
    systemId: 'M',
    categoryName: 'Merchant Promotion (RR)',
    items: [
      {
        itemName: 'delight',
      },
    ],
  },
  {
    categoryId: 'B',
    systemId: 'S',
    categoryName: 'Birthday Treats 2011 (RR)',
    items: [],
  },
  {
    categoryId: 'B',
    systemId: 'S',
    categoryName: 'Merchant Promotion (RR)',
    items: [
      {
        itemName: 'delight',
      },
    ],
  },
  {
    categoryId: 'B',
    systemId: 'B',
    categoryName: 'Birthday Treats 2011 (RR or RP)',
    items: [],
  },
];
const createCategoryMap = (arr) => {
  const categoryArr = arr.map((item) => {
    return item.categoryName;
  });

  const dealsArrWithSystemID = addSystemIdInDeals(arr);
  console.log(JSON.stringify(dealsArrWithSystemID));
  let uniqueCategories = [...new Set(categoryArr)];
  let map = new Map();

  for (let i = 0; i < uniqueCategories.length; i++) {
    for (let j = 0; j < dealsArrWithSystemID.length; j++) {
      if (dealsArrWithSystemID[j].categoryName === uniqueCategories[i]) {
        if (!map.get(dealsArrWithSystemID[j].categoryName)) {
          map.set(dealsArrWithSystemID[j].categoryName, [
            ...dealsArrWithSystemID[j].items,
          ]);
        } else {
          const it = map.get(dealsArrWithSystemID[j].categoryName);
          map.set(dealsArrWithSystemID[j].categoryName, [
            ...it,
            ...dealsArrWithSystemID[j].items,
          ]);
        }
      }
    }
  }
  return map;
};

const addSystemIdInDeals = (arr) => {
  arr.map((obj) => {
    return obj.items.map((item) => {
      item.systemId = obj.systemId;
      return item;
    });
  });
  return arr;
};

const createDealArr = (array) => {
  const map = createCategoryMap(array);
  const arr = [];
  map.forEach((value, key) => {
    arr.push({ categoryName: key, items: value });
  });
  console.log(JSON.stringify(arr));
  return arr;
};
