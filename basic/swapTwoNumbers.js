//swap number without temp variable;

const swapTwoNumbers = (a,b) => {
   a = a + b; // 7
   b = a - b; // 2
   a = a - b; // 5

   console.log(a,b)
}


//with bitwise operators

const swapTwoNumbersBitwise = (a,b) => { //TODO Understand this concept better
  a = a ^ b; // 7
  b = a ^ b; // 5
  a = a ^ b //2
  console.log(a,b)
}

swapTwoNumbersBitwise(5,2)