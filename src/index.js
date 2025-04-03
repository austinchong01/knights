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

    for(let i = 0; i < moves.length; i += 1){
        if(checkBounds(moves[i])) spaces.push(moves[i]);
    }
}

function knightMoves(start, end) {
    const spaces = [start];
    pushNeighbors(start, spaces);
    console.log(spaces)
}

const start = [0, 0];
const end = [1, 2];
knightMoves(start, end);
