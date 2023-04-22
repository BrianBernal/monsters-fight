// redux
import { useAppSelector } from "@/redux/hooks";

// styles
import "./resultSection.scss";
import { monsterWinner } from "@/redux/monsters/selectors";

function ResultSection() {
  const winner = useAppSelector(monsterWinner);
  const { status, error } = useAppSelector(
    (state) => state.monsters.fightResult
  );

  const getText = () => {
    if (status === "loading") {
      return "Loading...";
    }
    if (error) {
      return "This fight was not possible";
    }
    if (winner?.name) {
      return `${winner?.name} Wins!`;
    }
    return "";
  };

  const text = getText();

  return (
    <p className={`result-panel ${text ? " result-panel--show" : ""}`}>
      {text}
    </p>
  );
}

export default ResultSection;
