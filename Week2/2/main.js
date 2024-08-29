const calcTips = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bill", bills, 'Tips' , tips, 'Total' , total);