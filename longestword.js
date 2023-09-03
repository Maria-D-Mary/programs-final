const sentence = 'hello world this is a sample sentence'
const words = sentence.split(' ');

  let longestWord = '';
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }
  
console.log(longestWord)