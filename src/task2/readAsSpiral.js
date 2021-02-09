export default function readAsSpiral(array, clockwise = true) {
  let spiralArray = new SpiralArray(array, clockwise);
  spiralArray.unfold();
  return spiralArray.unfoldedArray.join(" ");
}

class SpiralArray {
  constructor(array, clockwise) {
    this.clockwise = clockwise;
    this.direction = this.clockwise ? "right" : "down";

    this.array = array.map((row) =>
      row.map((cell) => ({ value: cell, visited: false }))
    );

    this.col = 0;
    this.row = 0;

    this.unfoldedArray = [];
  }

  unfold() {
    while (!this.isUnfolded()) {
      this.unfoldedArray.push(this.array[this.row][this.col].value);
      this.array[this.row][this.col].visited = true;
      this.nextCell();
      if (this.needTurn()) {
        this.goBackAndTurn();
        this.nextCell();
      }
    }
  }

  nextCell() {
    this.col += cellOffset[this.direction].col;
    this.row += cellOffset[this.direction].row;
  }

  needTurn() {
    return (
      !this.array[this.row] ||
      !this.array[this.row][this.col] ||
      this.array[this.row][this.col].visited
    );
  }

  goBackAndTurn() {
    this.col -= cellOffset[this.direction].col;
    this.row -= cellOffset[this.direction].row;
    this.direction = this.clockwise
      ? cellOffset[this.direction].next
      : cellOffset[this.direction].prev;
  }

  isUnfolded() {
    return this.array.every((row) => row.every((cell) => cell.visited));
  }
}

const cellOffset = {
  right: { row: 0, col: 1, next: "down", prev: "up" },
  down: { row: 1, col: 0, next: "left", prev: "right" },
  left: { row: 0, col: -1, next: "up", prev: "down" },
  up: { row: -1, col: 0, next: "right", prev: "left" },
};
