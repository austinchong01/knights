function coordToSpace(coord) {
  return coord[1] * 8 + coord[0];
}

function spaceToCoord(space) {
  return [space % 8, Math.floor(space / 8)];
}

function checkBounds(coord) {
  if (coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7)
    return false;
  return true;
}

function pushNeighbors(start, neighbors) {
  const first = [start[0] + 2, start[1] + 1];
  const second = [start[0] + 2, start[1] - 1];
  const third = [start[0] - 2, start[1] + 1];
  const fourth = [start[0] - 2, start[1] - 1];

  const fifth = [start[0] + 1, start[1] + 2];
  const sixth = [start[0] + 1, start[1] - 2];
  const seventh = [start[0] - 1, start[1] + 2];
  const eighth = [start[0] - 1, start[1] - 2];

  const moves = [first, second, third, fourth, fifth, sixth, seventh, eighth];

  for (let i = 0; i < moves.length; i += 1) {
    if (checkBounds(moves[i])) {
      const space = coordToSpace(moves[i]);
      neighbors.push(space);
    }
  }
}

function createAdjacencyList() {
  const list = [];

  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const coord = [];
      pushNeighbors([j, i], coord);
      list.push(coord);
    }
  }
  return list;
}

const adjList = createAdjacencyList();
console.log(adjList);
