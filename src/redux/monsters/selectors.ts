import { RootState } from "../store";

const selectedPlayerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.playerMonsterId
  );
};
const selectedComputerMonsterId = ({ monsters }: RootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.computerMonsterId
  );
};

const monsterWinner = ({ monsters }: RootState) => {
  const winner = monsters.list.find((monster) => {
    return monster.id === monsters.fightResult.detail?.winner.id;
  });

  return winner;
};

export { selectedPlayerMonsterId, selectedComputerMonsterId, monsterWinner };
