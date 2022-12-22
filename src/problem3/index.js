
function charCode(st){
  const charAt = st.charCodeAt(0)
  const val = charAt > 96 ? charAt -96: charAt - 38 
  return val
}

function problem3(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const halfLimit = line.length / 2;
    const left = line.slice(0,halfLimit)
    const right = line.slice(halfLimit, line.length);
    for (let j = 0; j < left.length; j++) {
      const item = left[j];
      if (right.indexOf(item) > -1) {
        const addToSum = charCode(item);
        sum +=  addToSum;
        break;
      }
    }
  }
  return sum;
}

function problem3Part2(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    const line1 = input[i];
    const line2 = input[i+1];
    const line3 = input[i+2];
    for (let j = 0; j < line1.length; j++) {
      const item = line1[j];
      if ((line2.indexOf(item) > -1) && (line3.indexOf(item) > -1)){
        const addToSum = charCode(item);
        sum +=  addToSum;
        break;
      }
    }
  }
  return sum;
}

module.exports = { problem3, problem3Part2 };
