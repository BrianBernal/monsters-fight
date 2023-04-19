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

  return text ? <p className="result-panel">{text}</p> : <></>;
}

export default ResultSection;
