// styles
import MonsterDetail from "./monsterDetail/MonsterDetail";
import "./selectedMonsters.scss";

function SelectedMonsters() {
  return (
    <section className="boxing-ring">
      <MonsterDetail title="Monster 1" />
      <button>Start Battle</button>
      <MonsterDetail title="Monster 1" />
    </section>
  );
}

export default SelectedMonsters;
