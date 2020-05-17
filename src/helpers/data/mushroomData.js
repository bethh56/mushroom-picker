import Basket from "../../components/Basket/Basket";

let basket = [];

/* eslint-disable max-len */
const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Amanita Muscaria',
    imgUrl: 'https://images.ctfassets.net/cnu0m8re1exe/6UlXwhl3wnA3KMkuKUjOxE/824fe401fb9dd72a799abb5019fb1198/amanita-muscaria.jpg?w=650&h=433&fit=fill',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Death Cap (Amanita phalloides)',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom3',
    name: 'Conocybe filaris',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/94/180794-050-AAD9AE56/mushrooms-lawn-mushroom-Conocybe-filaris-Ingestion-region.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Podostroma cornu-damae',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/95/180795-050-2F8C3482/Podostroma-cornu-damae-fruiting-bodies-varities-number-fatalities.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Autumn Skullcap (Galerina marginata)',
    imgUrl: 'https://cdn.britannica.com/03/180803-050-11B5EAE5/skullcaps-mushrooms-autumn-skullcap.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Boletus edulis',
    imgUrl: 'https://www.mushroom-appreciation.com/image-files/xporcini-mushroom-in-nature.jpg.pagespeed.ic.W2LP-wK93T.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Hypomyces lactifluorum',
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/58e7cca8414fb5b577b55ebe/1532110346531-J59SGNJIM7IL4L6A3LOK/ke17ZwdGBToddI8pDm48kNs_Z6SiG60tmEcqdOPWBzZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USuFBtAB2pMDWthYO3Kf0ynD8evihrpv9rpyuHqgQ1f4ZtJ3qR9G2BYeA0wOAaeYNg/Hypomyces+lactifluorum?format=1500w',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Armillaria',
    imgUrl: 'https://www.first-nature.com/fungi/images/physalacriaceae/armillaria-mellea4.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Lepista nuda',
    imgUrl: 'https://out-grow.com/images/Lepista_nuda.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Boletus edulis ',
    imgUrl: 'https://www.mushroom-appreciation.com/image-files/xporcini-mushroom-in-nature.jpg.pagespeed.ic.W2LP-wK93T.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Armillaria',
    imgUrl: 'https://www.first-nature.com/fungi/images/physalacriaceae/armillaria-mellea4.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Hypomyces lactifluorum',
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/58e7cca8414fb5b577b55ebe/1532110346531-J59SGNJIM7IL4L6A3LOK/ke17ZwdGBToddI8pDm48kNs_Z6SiG60tmEcqdOPWBzZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USuFBtAB2pMDWthYO3Kf0ynD8evihrpv9rpyuHqgQ1f4ZtJ3qR9G2BYeA0wOAaeYNg/Hypomyces+lactifluorum?format=1500w',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Lepista nuda',
    imgUrl: 'https://out-grow.com/images/Lepista_nuda.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Coprinus comatus',
    imgUrl: 'http://northernbushcraft.com.s3-website-us-west-2.amazonaws.com/mushrooms/shaggyMane/1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Boletus edulis ',
    imgUrl: 'https://www.mushroom-appreciation.com/image-files/xporcini-mushroom-in-nature.jpg.pagespeed.ic.W2LP-wK93T.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Armillaria',
    imgUrl: 'https://www.first-nature.com/fungi/images/physalacriaceae/armillaria-mellea4.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Hypomyces lactifluorum',
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/58e7cca8414fb5b577b55ebe/1532110346531-J59SGNJIM7IL4L6A3LOK/ke17ZwdGBToddI8pDm48kNs_Z6SiG60tmEcqdOPWBzZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USuFBtAB2pMDWthYO3Kf0ynD8evihrpv9rpyuHqgQ1f4ZtJ3qR9G2BYeA0wOAaeYNg/Hypomyces+lactifluorum?format=1500w',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Lepista nuda',
    imgUrl: 'https://out-grow.com/images/Lepista_nuda.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Coprinus comatus',
    imgUrl: 'http://northernbushcraft.com.s3-website-us-west-2.amazonaws.com/mushrooms/shaggyMane/1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Craterellus cornucopioides',
    imgUrl: 'https://eatdrinkbetter.com/wp-content/uploads/2010/08/black-trumpets.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const getBasket = () => basket;

const getMushrooms = () => mushrooms;

const getBasketItems = () => {
  const pickRandomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  basket.push(pickRandomMushroom);
  if (pickRandomMushroom.isPoisonous === true) {
    console.error('poison!');
  } else if (pickRandomMushroom.isDeadly === true) {
    console.error('deadly!');
  } else if (pickRandomMushroom.isMagic === true) {
    console.error('magic!');
  }
};

// const mushroomPickedCases = () => {
//   const mushroom = getMushrooms();
//   if (mushroom.isPoisonous === true) {
//     poisonousMushroom();
//   }
// }

export default { getMushrooms, getBasketItems, getBasket };
