// styles
import "./monsterDetail.scss";
import reactLogo from "@/assets/react.svg";

type TMonsterDetail = {
  title: string;
};

function MonsterDetail({ title }: TMonsterDetail) {
  return (
    <article className="box detail-card">
      <img src={reactLogo} className="card__img" alt="React logo" />
      <span className="detail-card__title">{title}</span>
    </article>
  );
}

export default MonsterDetail;
