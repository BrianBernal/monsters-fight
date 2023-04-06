// styles
import { TMonster } from "@/redux/monsters/initialState";
import "./monsterDetail.scss";
import reactLogo from "@/assets/react.svg";
import BarIndicator from "./barIndicator/BarIndicator";

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
  const { name, hp, attack, defense, speed } = monster;
  const indicatorsToShow = {
    hp,
    attack,
    defense,
    speed,
  };

  return (
    <article className="box detail-card">
      <img src={reactLogo} className="detail-card__image" alt="React logo" />
      <span className="detail-card__title">{name}</span>
      <hr className="detail-card__divider" />
      {Object.entries(indicatorsToShow).map((enumValue) => {
        return (
          <BarIndicator
            key={enumValue[0]}
            title={enumValue[0]}
            percentageVale={enumValue[1]}
          />
        );
      })}
    </article>
  );
}

export default MonsterDetail;
