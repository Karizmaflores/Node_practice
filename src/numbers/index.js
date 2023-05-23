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
  for(let i = 0; i < arr.length; i++){
    const num1 = arr[i];
    for(let j = 0; j < arr.length; j++){
      const num2 = arr[j];
      if (num1 + num2 === sum){
        return true;
      }
      else return false;
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}