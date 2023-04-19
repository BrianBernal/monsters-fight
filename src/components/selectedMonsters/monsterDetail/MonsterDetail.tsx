// styles
import { TMonster } from "@/redux/monsters/initialState";
import "./monsterDetail.scss";
import BarIndicator from "./barIndicator/BarIndicator";

type TMonsterDetail = {
  emptyMessage: string;
  monster: TMonster | undefined;
};

function MonsterDetail({ monster, emptyMessage }: TMonsterDetail) {
  if (!monster) {
    return (
      <div className="box detail-card">
        <span className="detail-card__error-message">{emptyMessage}</span>
      </div>
    );
  }
  const { name, hp, attack, defense, speed, imageUrl } = monster;
  const indicatorsWithKeyLabels = {
    HP: hp,
    Attack: attack,
    Defense: defense,
    Speed: speed,
  };

  return (
    <div className="box detail-card">
      <img src={imageUrl} className="detail-card__image" alt="React logo" />
      <span className="detail-card__title">{name}</span>
      <hr className="detail-card__divider" />
      {Object.entries(indicatorsWithKeyLabels).map((enumValue) => {
        return (
          <BarIndicator
            key={enumValue[0]}
            title={enumValue[0]}
            percentageVale={enumValue[1]}
          />
        );
      })}
    </div>
  );
}

export default MonsterDetail;
