// styles
import { monster } from "@/redux/monsters/initialState";
import "./monsterDetail.scss";
import reactLogo from "@/assets/react.svg";

type TMonsterDetail = {
  monster: monster | undefined;
};

function MonsterDetail({ monster }: TMonsterDetail) {
  if (!monster) {
    return <article>Monster not available</article>;
  }
  const { name } = monster;

  return (
    <article className="box detail-card">
      <img src={reactLogo} className="card__img" alt="React logo" />
      <span className="detail-card__title">{monster.name}</span>
    </article>
  );
}

export default MonsterDetail;
