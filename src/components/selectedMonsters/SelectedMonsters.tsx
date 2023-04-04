// redux
import { useAppSelector } from "@/redux/hooks";
import {
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

  return (
    <section className="boxing-ring">
      <MonsterDetail monster={playerMonster} />
      <button className="boxing-ring__start-button">Start Battle</button>
      <MonsterDetail monster={computerMonster} />
    </section>
  );
}

export default SelectedMonsters;
