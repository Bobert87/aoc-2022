function problem4(input) {
  let containsCount = 0;
  for (let i = 0; i < input.length; i++) {    
    const pair = input[i].split(',');
    let left = {};
    let right  = {};
    left.min = parseInt(pair[0].split('-')[0]);
    left.max = parseInt(pair[0].split('-')[1]);
    left.size = left.max - left.min;
    right.min = parseInt(pair[1].split('-')[0]);
    right.max = parseInt(pair[1].split('-')[1]);
    right.size = right.max - right.min;
    if (left.size <= right.size){
      if ((right.min <= left.min) && (right.max >= left.max)){
        containsCount += 1;
        continue;
      }
    }
    if (right.size <= left.size){
      if ((left.min <= right.min) && (left.max >= right.max)){
        containsCount += 1;
        continue;
      }
    }
  }
  return containsCount;
}

function problem4Part2(input){
  let containsCount = 0;
  for (let i = 0; i < input.length; i++) {    
    const pair = input[i].split(',');
    let left = {};
    let right  = {};
    left.min = parseInt(pair[0].split('-')[0]);
    left.max = parseInt(pair[0].split('-')[1]);
    right.min = parseInt(pair[1].split('-')[0]);
    right.max = parseInt(pair[1].split('-')[1]);
    if ((left.max >= right.min) && (right.max >= left.min)){
      containsCount += 1
      continue;
    }
    if ((right.max >= left.min) && (left.max >= right.min))
      containsCount += 1

  }
  return containsCount;
}

module.exports = { problem4,  problem4Part2 };
