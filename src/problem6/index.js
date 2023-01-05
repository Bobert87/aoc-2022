function allOcurrences(marker){
  let count = 0;
  for (let i = 0; i < marker.length; i += 1) {
    const char = marker[i];
    for (let j = i+1; j < marker.length; j += 1) {
      if (marker.indexOf(char,j) > -1) count+=1
    }
  }
  return count;
}

function indexOfMarker(input,size){
  for (let i = 0; i < input.length - size; i++) {
    const marker = input.slice(i,i+size);
    const allOcurrances = allOcurrences(marker);
    if (allOcurrances === 0)
      return i+size
  }
  return -1
}

function problem6(input) {
  return indexOfMarker(input,4)
}

function problem6Part2(input) {
  return indexOfMarker(input,14)
}

module.exports = { problem6, problem6Part2 };
