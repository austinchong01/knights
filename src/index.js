function levelOrder(start, callback) {
  if (typeof callback !== "function")
    throw new Error("Callback function must be provided.");

  const queue = [start];
  while (queue.length != 0) {
    const visited = queue.shift();
    callback(visited);
    if (visited.left) queue.push(visited.left);
    if (visited.right) queue.push(visited.right);
  }
}

function knightMoves(spaces, end, moves = 0) {
  if (spaces.includes(end)) return moves;

  spaces.forEach((element) => {
    pushNeighbors(element, spaces);
    spaces.shift();
  });

  // console.log(spaces.indexOf([2, 1]))
  // console.log(spaces)
  //   console.log(spaces.includes([2, 1]))
  //   console.log(knightMoves(spaces, end, moves + 1));
}

const start = [0, 0];
const end = [2, 1];
const spaces = [start];
// knightMoves(spaces, end);

console.log(spaceToCoord(12))