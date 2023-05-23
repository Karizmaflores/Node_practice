const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0){
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}