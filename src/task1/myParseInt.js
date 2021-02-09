export default function myParseInt(x) {
  // lol :D
  // return parseInt(x, 10);

  let string = x.toString().trim();
  let isNegative = string[0] === "-" ? -1 : 1;

  string = string.replace(/^[+-]/gi, "").replace(/\D.*/gi, "");
  if (string.length === 0) return NaN;

  return (
    isNegative *
    string.split("").reduce((a, b) => {
      return a * 10 + +b;
    }, 0)
  );
}
