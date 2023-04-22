import { TRootState } from "../store";

const selectedPlayerMonsterId = ({ monsters }: TRootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.playerMonsterId
  );
};
const selectedComputerMonsterId = ({ monsters }: TRootState) => {
  return monsters.list.find(
    (monster) => monster.id === monsters.computerMonsterId
  );
};

const monsterWinner = ({ monsters }: TRootState) => {
  const winner = monsters.list.find((monster) => {
    return monster.id === monsters.fightResult.detail?.winner.id;
  });

  return winner;
};

export { selectedPlayerMonsterId, selectedComputerMonsterId, monsterWinner };
