// components
import MonsterList from "../components/monsterList/MonsterList";
import SelectedMonsters from "../components/selectedMonsters/SelectedMonsters";

// styles
import "./home.scss";

function Home() {
  return (
    <main className="main">
      <h1>Battle of Monsters</h1>
      <h2>Select your monster</h2>
      <MonsterList />
      <SelectedMonsters />
    </main>
  );
}

export default Home;
