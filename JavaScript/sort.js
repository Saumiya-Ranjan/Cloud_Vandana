const numbers = [1,2,3,4,5,3,6,8,1];
numbers.sort(function(a, b) {       //sort the array in descending 
  return b - a;
});

console.log(numbers); 
