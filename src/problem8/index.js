function createForest(input) {
  let forest = [];
  for (let i = 0; i < input.length; i++) {
    forest.push([]);
    const line = input[i];
    for (let j = 0; j < line.length; j++) {
      const element = line[j];
      forest[i].push({ height: parseInt(element) });
    }
  }
  return forest;
}

function problem8(input) {
  const forest = createForest(input);
  let visibleTrees = forest.length * 2 + forest[0].length * 2 - 4;
  for (let i = 1; i < forest.length - 1; i++) {
    const row = forest[i];
    for (let j = 1; j < row.length - 1; j++) {
      const tree = forest[i][j];
      let isVisible = false;

      let ray = j + 1;
      while (ray < forest[i].length) {
        const right = forest[i][ray];
        if (right.height >= tree.height) {
          ray = row.length;
        } else {
          ray += 1;
          if (ray === row.length) isVisible = isVisible || true;
        }
      }

      if (isVisible) {
        visibleTrees += 1;
        continue;
      }

      ray = j - 1;
      while (ray > -1) {
        const left = forest[i][ray];
        if (left.height >= tree.height) {
          ray = -1;
        } else {
          ray -= 1;
          if (ray === -1) isVisible = isVisible || true;
        }
      }

      if (isVisible) {
        visibleTrees += 1;
        continue;
      }

      ray = i - 1;
      while (ray > -1) {
        const up = forest[ray][j];
        if (up.height >= tree.height) {
          ray = -1;
        } else {
          ray -= 1;
          if (ray === -1) isVisible = isVisible || true;
        }
      }

      if (isVisible) {
        visibleTrees += 1;
        continue;
      }

      ray = i + 1;
      while (ray < forest.length) {
        const down = forest[ray][j];
        if (down.height >= tree.height) {
          ray = forest.length;
        } else {
          ray += 1;
          if (ray === forest.length) isVisible = isVisible || true;
        }
      }

      if (isVisible) {
        visibleTrees += 1;
        continue;
      }
    }
  }
  return visibleTrees;
}

function problem8Part2(input) {
  const forest = createForest(input);
  let score = { };
  let highestScore = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < forest.length - 1; i++) {
    const row = forest[i];
    for (let j = 1; j < row.length - 1; j++) {
      score = { up: 0, down: 0, left: 0, right: 0 };
      const tree = forest[i][j];
      let isVisible = false;
     
      let ray = i - 1;
      while (ray > -1) {
        score.up += 1;
        const up = forest[ray][j];
        if (up.height >= tree.height) {
          ray = -1;
        } else {
          ray -= 1;
          if (ray === -1) isVisible = isVisible || true;
        }
      }

      ray = j - 1;
      while (ray > -1) {
        score.left += 1;
        const left = forest[i][ray];
        if (left.height >= tree.height) {
          ray = -1;
        } else {
          ray -= 1;
          if (ray === -1) isVisible = isVisible || true;
        }
      }

      ray = j + 1;
      while (ray < forest[i].length) {
        score.right += 1;
        const right = forest[i][ray];
        if (right.height >= tree.height) {
          ray = row.length;
        } else {
          ray += 1;
          if (ray === row.length) isVisible = isVisible || true;
        }
      }

      ray = i + 1;
      while (ray < forest.length) {        
        score.down += 1;
        const down = forest[ray][j];
        if (down.height >= tree.height) {
          ray = forest.length;
        } else {
          ray += 1;
          if (ray === forest.length) isVisible = isVisible || true;
        }
      }

      const finalScore = score.up * score.down * score.left * score.right;
      if (finalScore >= highestScore)
        highestScore = finalScore;
    }
  }
  return highestScore;
}

module.exports = { problem8, problem8Part2 };
