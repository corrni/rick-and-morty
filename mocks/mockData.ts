import { GetCharacterQuery } from "graphql-types/graphql";

export const characterListData = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: "3",
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: "4",
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: "5",
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
  {
    id: "6",
    name: "Abadango Cluster Princess",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },
  {
    id: "7",
    name: "Abradolf Lincler",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  },
  {
    id: "8",
    name: "Adjudicator Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },
  {
    id: "9",
    name: "Agency Director",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: "10",
    name: "Alan Rails",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },
  {
    id: "11",
    name: "Albert Einstein",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: "12",
    name: "Alexander",
    image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  },
  {
    id: "13",
    name: "Alien Googah",
    image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
  },
  {
    id: "14",
    name: "Alien Morty",
    image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  },
  {
    id: "15",
    name: "Alien Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  },
  {
    id: "16",
    name: "Amish Cyborg",
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  },
  {
    id: "17",
    name: "Annie",
    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  },
  {
    id: "18",
    name: "Antenna Morty",
    image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  },
  {
    id: "19",
    name: "Antenna Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  },
  {
    id: "20",
    name: "Ants in my Eyes Johnson",
    image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  },
];

export const characterData: NonNullable<GetCharacterQuery["character"]> = {
  __typename: "Character",
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    __typename: "Location",
    name: "Earth (C-137)",
    dimension: "Dimension C-137",
  },
  location: {
    __typename: "Location",
    name: "Citadel of Ricks",
    dimension: "unknown",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    {
      __typename: "Episode",
      id: "1",
    },
    {
      __typename: "Episode",
      id: "2",
    },
    {
      __typename: "Episode",
      id: "3",
    },
    {
      __typename: "Episode",
      id: "4",
    },
    {
      __typename: "Episode",
      id: "5",
    },
    {
      __typename: "Episode",
      id: "6",
    },
    {
      __typename: "Episode",
      id: "7",
    },
    {
      __typename: "Episode",
      id: "8",
    },
    {
      __typename: "Episode",
      id: "9",
    },
    {
      __typename: "Episode",
      id: "10",
    },
    {
      __typename: "Episode",
      id: "11",
    },
    {
      __typename: "Episode",
      id: "12",
    },
    {
      __typename: "Episode",
      id: "13",
    },
    {
      __typename: "Episode",
      id: "14",
    },
    {
      __typename: "Episode",
      id: "15",
    },
    {
      __typename: "Episode",
      id: "16",
    },
    {
      __typename: "Episode",
      id: "17",
    },
    {
      __typename: "Episode",
      id: "18",
    },
    {
      __typename: "Episode",
      id: "19",
    },
    {
      __typename: "Episode",
      id: "20",
    },
    {
      __typename: "Episode",
      id: "21",
    },
    {
      __typename: "Episode",
      id: "22",
    },
    {
      __typename: "Episode",
      id: "23",
    },
    {
      __typename: "Episode",
      id: "24",
    },
    {
      __typename: "Episode",
      id: "25",
    },
    {
      __typename: "Episode",
      id: "26",
    },
    {
      __typename: "Episode",
      id: "27",
    },
    {
      __typename: "Episode",
      id: "28",
    },
    {
      __typename: "Episode",
      id: "29",
    },
    {
      __typename: "Episode",
      id: "30",
    },
    {
      __typename: "Episode",
      id: "31",
    },
    {
      __typename: "Episode",
      id: "32",
    },
    {
      __typename: "Episode",
      id: "33",
    },
    {
      __typename: "Episode",
      id: "34",
    },
    {
      __typename: "Episode",
      id: "35",
    },
    {
      __typename: "Episode",
      id: "36",
    },
    {
      __typename: "Episode",
      id: "37",
    },
    {
      __typename: "Episode",
      id: "38",
    },
    {
      __typename: "Episode",
      id: "39",
    },
    {
      __typename: "Episode",
      id: "40",
    },
    {
      __typename: "Episode",
      id: "41",
    },
    {
      __typename: "Episode",
      id: "42",
    },
    {
      __typename: "Episode",
      id: "43",
    },
    {
      __typename: "Episode",
      id: "44",
    },
    {
      __typename: "Episode",
      id: "45",
    },
    {
      __typename: "Episode",
      id: "46",
    },
    {
      __typename: "Episode",
      id: "47",
    },
    {
      __typename: "Episode",
      id: "48",
    },
    {
      __typename: "Episode",
      id: "49",
    },
    {
      __typename: "Episode",
      id: "50",
    },
    {
      __typename: "Episode",
      id: "51",
    },
  ],
};

export const paginationInfo = {
  __typename: "Info",
  count: 862,
  next: 2,
  pages: null,
  prev: null,
} as const;
