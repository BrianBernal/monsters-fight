// components
import MonsterList from "@/components/monsterList/MonsterList";
import SelectedMonsters from "@/components/selectedMonsters/SelectedMonsters";
import ResultSection from "@/components/resultSection/ResultSection";

// styles
import "./home.scss";

function Home() {
  return (
    <main className="battle-container">
      <h1 className="battle-container__title">Battle of Monsters</h1>
      <h2 className="battle-container__subtitle">Select your monster</h2>
      <MonsterList />
      <ResultSection />
      <SelectedMonsters />
    </main>
  );
}

export default Home;
