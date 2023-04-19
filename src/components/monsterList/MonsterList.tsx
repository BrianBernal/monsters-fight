// libraries
import { useEffect } from "react";

// redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchMonsters,
  setPlayerMonsterId,
} from "@/redux/monsters/monstersSlice";

// styles
import "./monsterList.scss";

function MonsterList() {
  const dispatch = useAppDispatch();
  const {
    list: monsters,
    error,
    status,
  } = useAppSelector((state) => state.monsters);

  const getText = () => {
    if (status === "loading") {
      return "Loading...";
    }
    if (error) {
      return "No monsters available";
    }
    const message =
      monsters.length > 0 ? "Select your monster" : "No monsters available";

    return message;
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMonsters());
    }
  }, []);

  const handlePlayerSelector = (selectedId: string) => {
    return () => {
      dispatch(setPlayerMonsterId(selectedId));
    };
  };

  return (
    <>
      <p className="monster-list__title">{getText()}</p>
      <section className="monster-list">
        {monsters.map((monster) => (
          <div
            key={monster.id}
            onClick={handlePlayerSelector(monster.id)}
            className="box monster-list__card"
          >
            <img
              src={monster.imageUrl}
              className="monster-list__card__img"
              alt={monster.name}
            />
            <span>{monster.name}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default MonsterList;
