
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins!");
  }
};

checkWinner(avgDolphins, avgKoalas);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);
checkWinner(avgDolphinsData2, avgKoalasData2);