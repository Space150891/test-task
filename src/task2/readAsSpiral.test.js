import readAsSpiral from "./readAsSpiral";

let simple = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let big = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
];

let singleRow = [[1, 2, 3, 4, 5, 6]];

let twoRows = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
];

let singleCol = [[1], [2], [3], [4], [5], [6]];

let twoCols = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
];

test("simple", () => {
  expect(readAsSpiral(simple)).toEqual("1 2 3 6 9 8 7 4 5");
  expect(readAsSpiral(simple, false)).toEqual("1 4 7 8 9 6 3 2 5");
});

test("big", () => {
  expect(readAsSpiral(big)).toEqual(
    "1 2 3 4 5 6 12 18 24 23 22 21 20 19 13 7 8 9 10 11 17 16 15 14"
  );
  expect(readAsSpiral(big, false)).toEqual(
    "1 7 13 19 20 21 22 23 24 18 12 6 5 4 3 2 8 14 15 16 17 11 10 9"
  );
});

test("singleRow", () => {
  expect(readAsSpiral(singleRow)).toEqual("1 2 3 4 5 6");
  expect(readAsSpiral(singleRow, false)).toEqual("1 2 3 4 5 6");
});

test("twoRows", () => {
  expect(readAsSpiral(twoRows)).toEqual("1 2 3 4 5 6 12 11 10 9 8 7");
  expect(readAsSpiral(twoRows, false)).toEqual("1 7 8 9 10 11 12 6 5 4 3 2");
});

test("singleCol", () => {
  expect(readAsSpiral(singleCol)).toEqual("1 2 3 4 5 6");
  expect(readAsSpiral(singleCol, false)).toEqual("1 2 3 4 5 6");
});

test("twoCols", () => {
  expect(readAsSpiral(twoCols)).toEqual("1 2 4 6 8 10 12 11 9 7 5 3");
  expect(readAsSpiral(twoCols, false)).toEqual("1 3 5 7 9 11 12 10 8 6 4 2");
});
