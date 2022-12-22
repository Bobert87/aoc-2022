function problem5(input) {
  const invertedCrates = [];
  const stacks= [];
  const instructions = [];
  let linePointer = 0;
  while (input[linePointer].indexOf('1') === -1){
    invertedCrates.push(input[linePointer++]);
  }
  const stackCount = input[linePointer].match(/\d/g);
  while (invertedCrates.length > 0){
    const line = invertedCrates.pop();
    for (let i = 0; i < stackCount.length; i++) {
      const box = line[i*4+1];
      if (stacks[i] === undefined) stacks[i] = [];
      if (box !== ' ') stacks[i].push(box)
    }
  }
  linePointer+=2;
  let instructionIndex = 0;
  for (let i = linePointer; i < input.length; i++) {
    const instructionLine = input[i];
    const instructionSplit = instructionLine.split(' ');
    if (!instructions[instructionIndex]) instructions[instructionIndex] = {};
    instructions[instructionIndex].move = parseInt(instructionSplit[1]);
    instructions[instructionIndex].from = parseInt(instructionSplit[3])-1;
    instructions[instructionIndex].to = parseInt(instructionSplit[5])-1;
    instructionIndex++;
  }

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    let cratesMoved = 0;
    while (cratesMoved < instruction.move){
      stacks[instruction.to].push(stacks[instruction.from].pop());
      cratesMoved += 1;
    }
  }
  let result = ''
  for (let i = 0; i < stacks.length; i++) {
    result += stacks[i].pop(); 
  }
  return result
}

function problem5Part2(input){
  const invertedCrates = [];
  const stacks= [];
  const instructions = [];
  let linePointer = 0;
  while (input[linePointer].indexOf('1') === -1){
    invertedCrates.push(input[linePointer++]);
  }
  const stackCount = input[linePointer].match(/\d/g);
  while (invertedCrates.length > 0){
    const line = invertedCrates.pop();
    for (let i = 0; i < stackCount.length; i++) {
      const box = line[i*4+1];
      if (stacks[i] === undefined) stacks[i] = [];
      if (box !== ' ') stacks[i].push(box)
    }
  }
  linePointer+=2;
  let instructionIndex = 0;
  for (let i = linePointer; i < input.length; i++) {
    const instructionLine = input[i];
    const instructionSplit = instructionLine.split(' ');
    if (!instructions[instructionIndex]) instructions[instructionIndex] = {};
    instructions[instructionIndex].move = parseInt(instructionSplit[1]);
    instructions[instructionIndex].from = parseInt(instructionSplit[3])-1;
    instructions[instructionIndex].to = parseInt(instructionSplit[5])-1;
    instructionIndex++;
  }

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    let cratesMoved = 0;
    let cratesBuffer = []
    while (cratesMoved < instruction.move){
      cratesBuffer.push(stacks[instruction.from].pop());
      cratesMoved += 1;
    }
    while(cratesBuffer.length > 0){
      stacks[instruction.to].push(cratesBuffer.pop()) 
    }
  }
  let result = ''
  for (let i = 0; i < stacks.length; i++) {
    result += stacks[i].pop(); 
  }
  return result
}

module.exports = { problem5,  problem5Part2 };
