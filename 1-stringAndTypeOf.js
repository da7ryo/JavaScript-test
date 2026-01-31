function analyzeValue(val) {
  if (typeof val === "string") {
    return `Type: string, Length: ${val.length}`;
  } else if (typeof val === "number") {
    if (val % 2 === 0) {
      return `Type: number, Even`;
    } else {
      return `Type: number, Odd`;
    }
  } else {
    if (typeof val === "boolean") {
      return `Type: boolean, Value: ${val}`;
    }
  }
}

console.log(analyzeValue("JavaScript"));
console.log(analyzeValue(7));
console.log(analyzeValue(true));
