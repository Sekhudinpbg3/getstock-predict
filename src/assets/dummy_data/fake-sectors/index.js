const FakeSectors = [
  {
    id: 1,
    name: "AGRICULTURE",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=1",
    subsectors: [
      {
        id: 6,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=6",
      },
      {
        id: 5,
        name: "Forestry",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=5",
      },
      {
        id: 4,
        name: "Fishery",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=4",
      },
      {
        id: 2,
        name: "Plantation",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=2",
      },
      {
        id: 3,
        name: "Animal Husbandary",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=3",
      },
      {
        id: 1,
        name: "Crops",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=1",
      },
    ],
  },
  {
    id: 2,
    name: "MINING",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=2",
    subsectors: [
      {
        id: 11,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=11",
      },
      {
        id: 7,
        name: "Coal Mining",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=7",
      },
      {
        id: 9,
        name: "Metal & Mineral Mining",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=9",
      },
      {
        id: 8,
        name: "Crude Petroleum & Natural Gas Production",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=8",
      },
      {
        id: 34,
        name: "Land / Stone Quarrying",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=34",
      },
    ],
  },
  {
    id: 3,
    name: "BASIC INDUSTRY AND CHEMICALS",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=3",
    subsectors: [
      {
        id: 42,
        name: "Cement",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=42",
      },
      {
        id: 43,
        name: "Ceramics, Glass, Porcelain",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=43",
      },
      {
        id: 44,
        name: "Metal & Allied Products",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=44",
      },
      {
        id: 45,
        name: "Chemicals",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=45",
      },
      {
        id: 46,
        name: "Plastics & Packaging",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=46",
      },
      {
        id: 47,
        name: "Animal Feed",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=47",
      },
      {
        id: 48,
        name: "Wood Industries",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=48",
      },
      {
        id: 49,
        name: "Pulp & Paper",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=49",
      },
      {
        id: 50,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=50",
      },
    ],
  },
  {
    id: 4,
    name: "CONSUMER GOODS INDUSTRY",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=4",
    subsectors: [
      {
        id: 51,
        name: "Food & Beverages",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=51",
      },
      {
        id: 52,
        name: "Tobacco Manufacturers",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=52",
      },
      {
        id: 53,
        name: "Pharmaceuticals",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=53",
      },
      {
        id: 54,
        name: "Cosmetics & Household",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=54",
      },
      {
        id: 55,
        name: "Houseware",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=55",
      },
      {
        id: 56,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=56",
      },
    ],
  },
  {
    id: 5,
    name: "PROPERTY, REAL ESTATE AND BUILDING CONSTRUCTION",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=5",
    subsectors: [
      {
        id: 12,
        name: "Building Construction",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=12",
      },
      {
        id: 13,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=13",
      },
      {
        id: 10,
        name: "Property and Real Estate",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=10",
      },
    ],
  },
  {
    id: 6,
    name: "INFRASTRUCTURE, UTILITIES & TRANSPORTATION",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=6",
    subsectors: [
      {
        id: 14,
        name: "Energy",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=14",
      },
      {
        id: 15,
        name: "Toll Road, Airport, Harbor and Allied Products",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=15",
      },
      {
        id: 18,
        name: "Non Building Construction",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=18",
      },
      {
        id: 19,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=19",
      },
      {
        id: 16,
        name: "Telecommunication",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=16",
      },
      {
        id: 17,
        name: "Transportation",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=17",
      },
    ],
  },
  {
    id: 7,
    name: "FINANCE",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=7",
    subsectors: [
      {
        id: 20,
        name: "Bank",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=20",
      },
      {
        id: 24,
        name: "Investment Fund / Mutual Fund",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=24",
      },
      {
        id: 23,
        name: "Insurance",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=23",
      },
      {
        id: 25,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=25",
      },
      {
        id: 21,
        name: "Financial Institution",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=21",
      },
      {
        id: 22,
        name: "Securities Company",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=22",
      },
    ],
  },
  {
    id: 8,
    name: "TRADE, SERVICES, & INVESTMENT",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=8",
    subsectors: [
      {
        id: 29,
        name: "Advertising, Printing, dan Media",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=29",
      },
      {
        id: 31,
        name: "Computer And Services",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=31",
      },
      {
        id: 30,
        name: "Health Care",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=30",
      },
      {
        id: 33,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=33",
      },
      {
        id: 26,
        name: "Wholesale (Durable & Non Durable Goods)",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=26",
      },
      {
        id: 27,
        name: "Retail Trade",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=27",
      },
      {
        id: 28,
        name: "Restaurant, Hotel And Tourism",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=28",
      },
      {
        id: 32,
        name: "Investment Company",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=32",
      },
    ],
  },
  {
    id: 9,
    name: "MISCELLANEOUS INDUSTRY",
    stocks_url: "https://indonesia-stock-exchange.vercel.app/api?sector_id=9",
    subsectors: [
      {
        id: 36,
        name: "Automotive & Components",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=36",
      },
      {
        id: 37,
        name: "Textile, Garment",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=37",
      },
      {
        id: 38,
        name: "Footwear",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=38",
      },
      {
        id: 39,
        name: "Cable",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=39",
      },
      {
        id: 40,
        name: "Electronics",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=40",
      },
      {
        id: 41,
        name: "Others",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=41",
      },
      {
        id: 35,
        name: "Machinery & Heavy Equipment",
        stocks_url:
          "https://indonesia-stock-exchange.vercel.app/api?subsector_id=35",
      },
    ],
  },
];

export default FakeSectors
