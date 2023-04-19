// redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchMonsters,
  setPlayerMonsterId,
} from "@/redux/monsters/monstersSlice";

// styles
import "./monsterList.scss";
import { useEffect } from "react";

function MonsterList() {
  const dispatch = useAppDispatch();
  const {
    list: monsters,
    error,
    status,
  } = useAppSelector((state) => state.monsters);

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

  if (error) return <p>Monsters Not Found!</p>;
  if (status === "loading") return <p>Loading...</p>;

  return (
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
  );
}

export default MonsterList;
