// styles
import { TMonster } from "@/redux/monsters/initialState";
import "./monsterDetail.scss";
import reactLogo from "@/assets/react.svg";

type TMonsterDetail = {
  emptyMessage: string;
  monster: TMonster | undefined;
};

function MonsterDetail({ monster, emptyMessage }: TMonsterDetail) {
  if (!monster) {
    return (
      <article className="box detail-card">
        <span className="detail-card__error-message">{emptyMessage}</span>
      </article>
    );
  }
  const { name } = monster;

  return (
    <article className="box detail-card">
      <img src={reactLogo} className="detail-card__image" alt="React logo" />
      <hr className="detail-card__divider" />
      <span className="detail-card__title">{name}</span>
    </article>
  );
}

export default MonsterDetail;
