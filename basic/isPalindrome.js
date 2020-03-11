const isPalindrome = word => {
  let straight = "",
    reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    straight += word[i];
  }
  for (let j = 0; j < word.length; j++) {
    reversed += word[j];
  }
  console.log(straight === reversed ? "Palindrome" : "Is not Palindrome");
};

isPalindrome("madam");


//better way
const isPalindromeBetter = word => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      console.log("Is not palindrome");
      return;
    }
  }
  console.log("Is palindrome");
};

isPalindromeBetter("racecar");



//JS built in way
isPalindromeJS = word => {
  console.log(word === word.split('').reverse().join(''))
}

isPalindromeJS('racecar')
isPalindromeJS('race')
isPalindromeJS('madam')
