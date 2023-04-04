// styles
import "./monsterList.scss";
import reactLogo from "@/assets/react.svg";

function MonsterList() {
  return (
    <div className="card">
      <img src={reactLogo} className="card__img" alt="React logo" />
      <span>Image Title</span>
    </div>
  );
}

export default MonsterList;
