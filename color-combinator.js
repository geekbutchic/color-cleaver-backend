/******************
 * YOUR CODE HERE *
 ******************/
colorCombinator = (color1, color2) => {
  if (color1 === "red" && color2 === "yellow") {
    return "orange";
  } if (color1 === "yellow" && color2 === "red") {
    return "orange";
  } if (color1 === "red" && color2 === "blue") {
    return "purple";
  } if (color1 === "blue" && color2 === "red") {
    return "purple";
  } if (color1 === "yellow" && color2 === "blue"){
    return "green"
  } if (color1 === "blue" && color2 === "yellow") {
    return "green";
  }
}



// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
