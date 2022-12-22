function problem2(input) {
  const oponent = 'ABC';
  const player = 'XYZ';
  let sum = 0;
  for (let i = 0; i < input.length; i += 1) {
    const oponentDraw = oponent.indexOf(input[i].split(' ')[0]);
    const playerDraw = player.indexOf(input[i].split(' ')[1]);
    const playDiff = playerDraw - oponentDraw
    if (playDiff === 0) sum += 3;
    if ((playDiff === 1)||(playDiff === -2)) sum += 6
    sum += playerDraw + 1;
  }
  return sum;
}

function problem2Part2(input) {
  const oponent = 'ABC';
  const player = 'XYZ';
  let sum = 0;
  for (let i = 0; i < input.length; i += 1) {
    const targetDraw = input[i].split(' ')[1];
    const oponentDraw = oponent.indexOf(input[i].split(' ')[0]);
    let playerDraw = 0
    if (targetDraw === 'Y') 
      playerDraw = oponentDraw;
    if (targetDraw === 'Z') 
      playerDraw = (oponentDraw + 1) % 3;
    if (targetDraw === 'X') 
      playerDraw = (oponentDraw - 1) < 0 ? 2
    : (oponentDraw - 1);
    const playDiff = (playerDraw) - oponentDraw
    if (playDiff === 0) sum += 3;
    if ((playDiff === 1)||(playDiff === -2)) sum += 6
    sum += playerDraw+1;
  }
  return sum;
}

module.exports = { problem2, problem2Part2 };
