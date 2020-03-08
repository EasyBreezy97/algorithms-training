const greatestDivisor = (num1,num2) => {
  let minNumber = num1<num2 ? num1 : num2;
  let maxNumber = num1>num2 ? num1 : num2;
  if(num1 === num2){
    return console.log(num1)
  } else{
    for(let i= minNumber; i> 0; i--){
      if(minNumber%i === 0 && maxNumber % i === 0){
        return(console.log(i))
      }

    }
    return console.log(0)
  }
}

// greatestDivisor(69,169);
// greatestDivisor(12,20);
// greatestDivisor(25,100);
// greatestDivisor(0,100);


//fancy way

function greatestCommonDivisor(a, b){ //TODO Understand this concept better
  if(b == 0)
    return a;
  else
    return greatestCommonDivisor(b, a%b);
}

greatestDivisor(12,0);