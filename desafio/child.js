const randomIntFromInterval = () => {
  return Math.floor(Math.random() * 1001);
};

const getRandomNumber = (qty) => {
  const result = {};

  for (let i = 0; i < qty; i++) {
    const rNumber = randomIntFromInterval();
    result[rNumber] = result[rNumber] ? result[rNumber] + 1 : 1;
  }

  return result;
};

process.on("message", (qty) => {
  const response = getRandomNumber(qty);

  process.send(response);
});
