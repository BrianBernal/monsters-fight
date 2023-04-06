function getRandomInt(max: number, exceptions: Array<number> = []) {
  let isValidRandom = false;
  let randomInt = Math.floor(Math.random() * max);
  while (!isValidRandom) {
    if (exceptions.some((numException) => numException === randomInt)) {
      randomInt = Math.floor(Math.random() * max);
    } else {
      isValidRandom = true;
    }
  }

  return randomInt;
}

export { getRandomInt };
