//Detect if number is prime or not
const isPrime = number => {
  let divisor = 2;
  while(divisor < number){
    if(number % divisor === 0){
      console.log("is NOT prime number")
      return false;
    }else{
      divisor++;
    }
  }
  console.log("is prime number")
  return true;
}

// isPrime(1)
// isPrime(17)
// isPrime(25)
// isPrime(2)
