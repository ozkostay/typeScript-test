console.log("TS work!!!");

interface intOne {
  a: number;
  b?: string;
  fn(): string;
}

let aaa: intOne = {
  a: 12,
  b: "12345678",
  fn() {
    return "WWW";
  },
};

class classOne implements intOne {
  a: number;
  // b: string;
  constructor(aaa: number = 66, bbb: string = "6666") {
    this.a = aaa;
    // this.b = bbb;
  }

  fn() {
    return `QQQ ${this.a} === : "VVV"}`;
  }
}

const newClass = new classOne(22, "222");

console.log(aaa);
console.log(aaa.fn());
console.log(newClass);
console.log(newClass.fn());
