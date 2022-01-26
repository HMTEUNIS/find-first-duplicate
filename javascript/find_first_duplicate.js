function findFirstDuplicate(array)  {
  let temp = array[0];
  let found = 0;
  for (let i = 1; i < array.length; i++){
  array[i] === temp ? found = array[i] : temp = array[i]
  
  }
  if (found === 0) {return  -1} else {return found}
  }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
