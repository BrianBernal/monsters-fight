// redux
import { useAppSelector } from "@/redux/hooks";

// styles
import "./monsterList.scss";
import reactLogo from "@/assets/react.svg";

function MonsterList() {
  const monsters = useAppSelector((state) => state.monsters.list);

  return (
    <section className="monster-list">
      {monsters.map((monster) => (
        <div key={monster.id} className="box monster-list__card">
          <img
            src={reactLogo}
            className="monster-list__card__img"
            alt="React logo"
          />
          <span>{monster.name}</span>
        </div>
      ))}
    </section>
  );
}

export default MonsterList;
