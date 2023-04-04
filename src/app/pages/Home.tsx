// components
import MonsterList from "../components/monsterList/MonsterList";

// styles
import "./home.scss";

function Home() {
  return (
    <main className="main">
      <h1>Battle of Monsters</h1>
      <h2>Select your monster</h2>
      <MonsterList />
      <section>Selected Monsters Components</section>
    </main>
  );
}

export default Home;
