function getElves(input){
  let elfCount = 0;
  const elves = [];
  for (let i = 0; i < input.length; i += 1) {
    const item = input[i];
    if (item === '') {
      elfCount += 1;
      continue;
    }
    if (!Array.isArray(elves[elfCount])) elves[elfCount] = [];
    elves[elfCount].push(parseInt(input[i],10));
  }
  return elves
}

function getElvesCalorieSum(elves) {
  const elfCalories = [];  
  for (let i = 0; i < elves.length; i += 1) {
    const calories = elves[i].reduce((x,y) => x + y);
    elfCalories[i] = calories;    
  }  
  return elfCalories;  
}

function getTopNSum(numberOfItems,elvesCalorySum){
  elvesCalorySum.sort((a, b) => b - a); 
  let sum = 0;
  for (let i = 0; i < numberOfItems; i++) {
    sum += elvesCalorySum[i];
  }
  return sum;
}

function problem1(input) {
  const elves = getElves(input);
  const elvesCalorySum = getElvesCalorieSum(elves);  
  const topSum = getTopNSum(1, elvesCalorySum)
  return topSum;
}

function problem1Part2(input) {
  const elves = getElves(input);
  const elvesCalorySum = getElvesCalorieSum(elves);
  const topSum = getTopNSum(3, elvesCalorySum)
  return topSum;
}

module.exports = { problem1, problem1Part2 };
