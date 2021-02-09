import myParseInt from "./myParseInt";

test("just a number", () => {
  expect(myParseInt("1")).toEqual(1);
  expect(myParseInt(" 2")).toEqual(2);
  expect(myParseInt("3 ")).toEqual(3);
  expect(myParseInt(" 4 ")).toEqual(4);
  expect(myParseInt("-5")).toEqual(-5);
  expect(myParseInt("-6")).toEqual(-6);
  expect(myParseInt(" -7")).toEqual(-7);
  expect(myParseInt(" -8 ")).toEqual(-8);
});

test("number+letter", () => {
  expect(myParseInt("1a")).toEqual(1);
  expect(myParseInt(" 2b")).toEqual(2);
  expect(myParseInt("3c ")).toEqual(3);
  expect(myParseInt(" 4d ")).toEqual(4);
  expect(myParseInt("-5e")).toEqual(-5);
  expect(myParseInt("-6f")).toEqual(-6);
  expect(myParseInt(" -7g")).toEqual(-7);
  expect(myParseInt(" -8h ")).toEqual(-8);
});

test("words and letters", () => {
  expect(myParseInt("a")).toBeNaN();
  expect(myParseInt(" b")).toBeNaN();
  expect(myParseInt("c ")).toBeNaN();
  expect(myParseInt(" d ")).toBeNaN();
  expect(myParseInt("-e")).toBeNaN();
  expect(myParseInt("-f")).toBeNaN();
  expect(myParseInt(" -g")).toBeNaN();
  expect(myParseInt(" -h ")).toBeNaN();
  expect(myParseInt("NaN")).toBeNaN();
  expect(myParseInt("Infinity")).toBeNaN();
  expect(myParseInt("-Infinity")).toBeNaN();
});

test("other cases", () => {
  expect(myParseInt(true)).toBeNaN();
  expect(myParseInt(1)).toEqual(1);
  expect(myParseInt({ a: 1 })).toBeNaN();
  expect(myParseInt({ a: "a" })).toBeNaN();
  expect(myParseInt([1, 2, 3])).toEqual(1);
  expect(myParseInt(["a", "b", "c"])).toBeNaN();
});
