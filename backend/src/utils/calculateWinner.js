function calculateWinner(monster1 = {}, monster2 = {}) {
  const monster1Sum =
    monster1.attack + monster1.defense + monster1.hp + monster1.speed;
  const monster2Sum =
    monster2.attack + monster2.defense + monster2.hp + monster2.speed;

  if (monster1Sum > monster2Sum) {
    return { winner: monster1, tie: false };
  }

  if (monster2Sum > monster1Sum) {
    return { winner: monster2, tie: false };
  }

  if (monster1Sum === monster2Sum) {
    return { winner: null, tie: true };
  }
}

export default calculateWinner;
