// BEGIN
export default (...numbers) => {
  const startSum = numbers.reduce((total, number) => total + number, 0);
  const calculate = (...moreNumbers) => {
    const currentSum = moreNumbers.reduce((total, number) => total + number, 0);
    const totalSum = startSum + currentSum;
    const nextCalculate = (...evenMoreNumbers) => {
      const subsequentSum = evenMoreNumbers.reduce((total, number) => total + number, 0);
      return calculate(currentSum + subsequentSum);
    };
    nextCalculate.valueOf = () => totalSum;
    return nextCalculate;
  };
  calculate.valueOf = () => startSum;
  return calculate;
};
// END
