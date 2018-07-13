let winArr = [
  ["#0-0", "#1-0", "#2-0"],
  ["#0-1", "#1-1", "#2-1"],
  ["#0-2", "#1-2", "#2-2"],
  ["#2-0", "#2-1", "#2-2"],
  ["#0-1", "#1-1", "#2-1"],
  ["#0-2", "#1-2", "#2-2"],
  ["#0-0", "#1-1", "#2-2"],
["#2-0", "#1-1", "#0-2"],
  
  
  
  // top row
//continue untill all rows are filled
	
let mark =	
	
//create an event listener that works as a function for when players are marking
	
function elementContains(id, mark) {
  return $(id).text() === mark
}

// this function runs after each turn
// it checks whether a given (either 'x' or 'o') populates all
// three spots in any given win combination
function playerWon () {
  for (let i = ; i < ; i) {
    let winCombo = 
    let won = w
    // checks if elementContains returns true for every id
    if (won) return 