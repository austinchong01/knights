function coordToSpace(coord) {
  return coord[1] * 8 + coord[0];
}

function spaceToCoord(space) {
  return [space % 8, Math.floor(space / 8)]
}

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

function checkBounds(move) {
  if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return false;
  return true;
}

function pushNeighbors(start, spaces) {
  const first = [start[0] + 2, start[1] + 1];
  const second = [start[0] - 2, start[1] - 1];
  const third = [start[0] + 1, start[1] + 2];
  const fourth = [start[0] - 1, start[1] - 2];
  const moves = [first, second, third, fourth];

  for (let i = 0; i < moves.length; i += 1) {
    if (checkBounds(moves[i])) spaces.push(moves[i]);
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