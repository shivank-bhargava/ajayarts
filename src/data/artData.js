// Parse art data from image filenames
const artPieces = [
  {
    id: 1,
    filename: 'Dancing Ganesha_6.25x9inch_1997_$300.JPG',
    title: 'Dancing Ganesha',
    size: '6.25 x 9 inch',
    year: 1997,
    price: 300,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Ganesha', 'Deity']
  },
  {
    id: 2,
    filename: 'Emperor Shah Jahan and Mumtaz_6x8inch_2006_$1000.jpg',
    title: 'Emperor Shah Jahan and Mumtaz',
    size: '6 x 8 inch',
    year: 2006,
    price: 1000,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Emperor', 'Mughal', 'Royal']
  },
  {
    id: 3,
    filename: 'Emperor enjoying Dancers_7.5x9.5inch_1999_$1500.jpg',
    title: 'Emperor enjoying Dancers',
    size: '7.5 x 9.5 inch',
    year: 1999,
    price: 1500,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Emperor', 'Mughal', 'Royal', 'Dancers']
  },
  {
    id: 4,
    filename: 'Ganesha on lotus_9x12inch_2003_$500.jpg.JPG',
    title: 'Ganesha on lotus',
    size: '9 x 12 inch',
    year: 2003,
    price: 500,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Ganesha', 'Deity', 'Lotus']
  },
  {
    id: 5,
    filename: 'Ganesha riding on his vehicle_6.0x8.5inch_2011_$300.JPG',
    title: 'Ganesha riding on his vehicle',
    size: '6.0 x 8.5 inch',
    year: 2011,
    price: 300,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Ganesha', 'Deity']
  },
  {
    id: 6,
    filename: 'Ganesha with his consort_8.25x10.75inch_2006_$1500.jpg',
    title: 'Ganesha with his consort',
    size: '8.25 x 10.75 inch',
    year: 2006,
    price: 1500,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Ganesha', 'Deity']
  },
  {
    id: 7,
    filename: 'Happiness in the Village Life_9.75x7inch_2000_$500.jpg',
    title: 'Happiness in the Village Life',
    size: '9.75 x 7 inch',
    year: 2000,
    price: 500,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Village Life', 'Rural']
  },
  {
    id: 8,
    filename: 'King riding on Camel_6.75x8.5inch_1999_$400.jpg',
    title: 'King riding on Camel',
    size: '6.75 x 8.5 inch',
    year: 1999,
    price: 400,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Royal', 'King', 'Camel']
  },
  {
    id: 9,
    filename: 'Krishna in ceremonial attire with cows_6.5x9inch_2004_$1000.jpg',
    title: 'Krishna in ceremonial attire with cows',
    size: '6.5 x 9 inch',
    year: 2004,
    price: 1000,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Krishna', 'Deity', 'Cows']
  },
  {
    id: 10,
    filename: 'Krishna milking cow (Doodh Dohan)_7.5x8.75inch_2000_$1200.jpg',
    title: 'Krishna milking cow (Doodh Dohan)',
    size: '7.5 x 8.75 inch',
    year: 2000,
    price: 1200,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Krishna', 'Deity', 'Cows']
  },
  {
    id: 11,
    filename: 'Krishna with cows_5.25x7.25inch_1997_$700.jpg',
    title: 'Krishna with cows',
    size: '5.25 x 7.25 inch',
    year: 1997,
    price: 700,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Krishna', 'Deity', 'Cows']
  },
  {
    id: 12,
    filename: 'Loving moments of Krishna with Radha_8x10.25inch_$1200.jpg',
    title: 'Loving moments of Krishna with Radha',
    size: '8 x 10.25 inch',
    year: null,
    price: 1200,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Krishna', 'Radha', 'Deity', 'Romance']
  },
  {
    id: 13,
    filename: 'Morning in an Indian Village_7.25x9.5inch_2004_$800.jpg',
    title: 'Morning in an Indian Village',
    size: '7.25 x 9.5 inch',
    year: 2004,
    price: 800,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Village Life', 'Rural']
  },
  {
    id: 14,
    filename: 'Queen riding on mythological Camel_10.5x13.5inch_2003_$1000.jpg',
    title: 'Queen riding on mythological Camel',
    size: '10.5 x 13.5 inch',
    year: 2003,
    price: 1000,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Royal', 'Queen', 'Mythological', 'Camel']
  },
  {
    id: 15,
    filename: 'Ragini Feeding a Peacock_13x9.5inch_2009_$1100.jpg',
    title: 'Ragini Feeding a Peacock',
    size: '13 x 9.5 inch',
    year: 2009,
    price: 1100,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Ragini', 'Peacock', 'Woman']
  },
  {
    id: 16,
    filename: 'Royal Hunt_6.5x8.5inch_2002_$400.jpg',
    title: 'Royal Hunt',
    size: '6.5 x 8.5 inch',
    year: 2002,
    price: 400,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Royal', 'Hunt']
  },
  {
    id: 17,
    filename: 'Ship of Desert_9.75x7inch_2000_$400.jpg',
    title: 'Ship of Desert',
    size: '9.75 x 7 inch',
    year: 2000,
    price: 400,
    medium: 'Gouache with Gold Powder on Paper',
    tags: ['Desert', 'Camel']
  }
]

export default artPieces
