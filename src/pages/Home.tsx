// styles
import "./home.scss";

// components
import MonsterList from "@/components/monsterList/MonsterList";
import SelectedMonsters from "@/components/selectedMonsters/SelectedMonsters";
import ResultSection from "@/components/resultSection/ResultSection";

function Home() {
  return (
    <main className="battle-container">
      <h1 className="battle-container__title">Battle of Monsters</h1>
      <MonsterList />
      <ResultSection />
      <SelectedMonsters />
    </main>
  );
}

export default Home;
