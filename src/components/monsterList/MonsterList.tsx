// styles
import { useAppSelector } from "@/redux/hooks";
import "./monsterList.scss";
import reactLogo from "@/assets/react.svg";

function MonsterList() {
  const monsters = useAppSelector((state) => state.monsters.list);
  return (
    <div className="box card">
      <img src={reactLogo} className="card__img" alt="React logo" />
      <span>{monsters[0].name}</span>
    </div>
  );
}

export default MonsterList;
