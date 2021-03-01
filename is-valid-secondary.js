/******************
 * YOUR CODE HERE *
 ******************/
// isValidSecondary = (color) => {
//   if (color === "orange") {
//     return true;
//   } if (color === "purple") {
//     return true;
//   } if (color === "green") {
//     return true;
//   } if (color === "red") {
//     return false;
//   } if (color === "black") {
//     return false;
//   } if (color === "white") {
//     return false;
//   }
// }
// Refactor Version 
function isValidSecondary (color) {
  return color === "orange" || color === "green" || color === "purple"
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
