import { coordToSpace, spaceToCoord, createAdjacencyList } from "./graph.js";

function BFS(start, end) {
  const queue = [start];

  const visited = new Array(64).fill(false);
  visited[start] = true;

  const prev = new Array(64).fill(null);
  while (queue.length != 0) {
    const curr = queue.shift();
    if (curr === end) break;
    // queue neighbors
    for (let i = 0; i < adjList[curr].length; i += 1)
      if (!visited[adjList[curr][i]]) {
        queue.push(adjList[curr][i]);
        visited[adjList[curr][i]] = true;
        prev[adjList[curr][i]] = curr;
      }
  }
  return prev;
}

function createPath(end, prev) {
  let path = [];
  for (let i = end; i != null; i = prev[i]) path.push(i);
  return path.reverse();
}

function knightMoves(start, end) {
  const prev = BFS(start, end);
  return createPath(end, prev);
}

const adjList = createAdjacencyList();

const start = coordToSpace([0, 0]);
const end = coordToSpace([7, 7]);
const path = knightMoves(start, end);
for (let i = 0; i < path.length; i += 1) path[i] = spaceToCoord(path[i]);

console.log(`You made it in ${path.length - 1} moves! Here is your path:`);
for (let i = 0; i < path.length; i += 1) console.log(path[i]);
