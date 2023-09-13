// interface intSecond {
//   a: number;
//   b?: string;
// }

abstract class absSecond {
  a: number;
  b?: string;
  constructor(aaa: number, bbb: string) {
    this.a = aaa;
    this.b = bbb;
  }
  fn(): void {
    console.log("DDDDDDDDDDD");
  }
}

class clsSecond extends absSecond {
  c: number;
  constructor(aaa: number, bbb: string) {
    super(aaa, bbb);
    this.a = aaa;
    // this.b = bbb;
    this.c = 111;
  }

  // fn() {
  //   console.log("ac", this.a, this.c);
  // }
}

const aaa2 = new clsSecond(333, "333");
console.log("aaa2", aaa2);
aaa2.fn();
