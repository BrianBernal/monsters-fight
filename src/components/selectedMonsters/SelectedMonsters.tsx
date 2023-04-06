// redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchBattle,
  selectedComputerMonsterId,
  selectedPlayerMonsterId,
} from "@/redux/monsters/monstersSlice";

// components
import MonsterDetail from "./monsterDetail/MonsterDetail";

// styles
import "./selectedMonsters.scss";

function SelectedMonsters() {
  const playerMonster = useAppSelector(selectedPlayerMonsterId);
  const computerMonster = useAppSelector(selectedComputerMonsterId);
  const dispatch = useAppDispatch();

  const startBattleButtonHandler = () => {
    dispatch(fetchBattle());
  };

  return (
    <section className="boxing-ring">
      <MonsterDetail monster={playerMonster} emptyMessage="Player" />
      <button
        onClick={startBattleButtonHandler}
        className="boxing-ring__start-button"
        disabled={!playerMonster}
      >
        Start Battle
      </button>
      <MonsterDetail monster={computerMonster} emptyMessage="Computer" />
    </section>
  );
}

export default SelectedMonsters;
