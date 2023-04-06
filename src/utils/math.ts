function getRandomInt(max: number, exceptions: Array<number> = []) {
  let isValidRandom = false;
  let randomInt = Math.floor(Math.random() * max);

  while (!isValidRandom) {
    const randomIntIsAnException = exceptions.some(
      (numException) => numException === randomInt
    );
    if (randomIntIsAnException) {
      randomInt = Math.floor(Math.random() * max);
    } else {
      isValidRandom = true;
    }
  }
  return randomInt;
}

export { getRandomInt };
