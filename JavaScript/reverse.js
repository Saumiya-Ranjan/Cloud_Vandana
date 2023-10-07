function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');                //split the sentence into words
  const reversedWords = words.map(reverseWord);     //reverse the words
  const reversedSentence = reversedWords.join(' '); //join the word to form sentence
  return reversedSentence;
}

function reverseWord(word) {
  const charArray = word.split('');                 //convert the word into array
  const reversedCharArray = charArray.reverse();    //reverse the array
  const reversedWord = reversedCharArray.join('');  //convert the array to sentence
  return reversedWord;
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 
