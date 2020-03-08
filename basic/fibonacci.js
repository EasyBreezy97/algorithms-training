//print nth fibonacci number

const fibonacci = index => {
  let fibArr = [0, 1];

  for (let i = 2; i < index; i++) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  return console.log(fibArr[index - 1]);
};

fibonacci(15);
