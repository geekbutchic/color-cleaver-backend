/******************
 * YOUR CODE HERE *
 ******************/
// isValidPrimary = (color) => {
//   if (color === "red"){
//     return true;
//   } if (color === "yellow") {
//     return true;
//   } if (color === "blue") {
//     return true; 
//   } if (color === "orange") {
//     return false;
//   } if (color === "blorgon") {
//     return false;
//   } if (color === "ted") {
//     return false;
//   }
// }
// Refactor Version 
isValidPrimary = (color) => {
  return color === "red" || color === "yellow" || color === "blue"
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
