// libraries
import { useEffect } from "react";

// redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchMonstersAction,
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
    playerMonsterId,
  } = useAppSelector((state) => state.monsters);

  const getText = () => {
    if (status === "loading") {
      return "Loading...";
    }
    if (error) {
      return "Monsters not found!";
    }
    const message =
      monsters.length > 0 ? "Select your monster" : "No monsters available";

    return message;
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMonstersAction());
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
        {monsters.map(({ id, imageUrl, name }) => {
          const isSelected = id === playerMonsterId;
          return (
            <div
              key={id}
              onClick={handlePlayerSelector(id)}
              className={`box monster-list__card${
                isSelected ? " monster-list__card--selected" : ""
              }`}
            >
              <img
                src={imageUrl}
                className="monster-list__card__img"
                alt={name}
              />
              <span>{name}</span>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default MonsterList;
