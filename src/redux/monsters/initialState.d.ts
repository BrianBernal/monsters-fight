interface monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

const monsters: Array<monster> = [
  {
    id: "id1",
    name: "Monster 1",
    attack: 20,
    defense: 30,
    hp: 100,
    speed: 50,
    type: "Type1",
    imageUrl: "url",
  },
  {
    id: "id2",
    name: "Monster 2",
    attack: 30,
    defense: 10,
    hp: 100,
    speed: 30,
    type: "Type2",
    imageUrl: "url",
  },
  {
    id: "id3",
    name: "Monster 3",
    attack: 40,
    defense: 5,
    hp: 90,
    speed: 20,
    type: "Type3",
    imageUrl: "url",
  },
  {
    id: "id4",
    name: "Monster 4",
    attack: 50,
    defense: 0,
    hp: 80,
    speed: 10,
    type: "Type4",
    imageUrl: "url",
  },
];

const initialState = {
  list: monsters,
  playerMonsterId: "",
  computerMonsterId: "",
};

export default initialState;
