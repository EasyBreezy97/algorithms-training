const insertionSort = numbers => {
  for (let i = 1; i < numbers.length; i++) {
    let j = i - 1;
    let key = numbers[i];
    while (key < numbers[j] && j >= 0) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = key;
  }
  console.log(numbers);
};

insertionSort([5,4,2,1,3]);
