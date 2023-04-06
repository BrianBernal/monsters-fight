// redux
import { useAppSelector } from "@/redux/hooks";
import { monsterWinner } from "@/redux/monsters/monstersSlice";

// styles
import "./resultSection.scss";

function ResultSection() {
  const winner = useAppSelector(monsterWinner);
  const { status, error } = useAppSelector(
    (state) => state.monsters.fightResult
  );

  if (status === "loading") {
    return <span className="no-result">Loading...</span>;
  }
  if (error) {
    return <span className="no-result">This fight was not possible</span>;
  }
  if (!winner) {
    return <span className="no-result" />;
  }
  return <section className="result-panel">{winner.name} Wins!</section>;
}

export default ResultSection;
