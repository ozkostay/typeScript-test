console.log("TS work!!!");
var aaa = {
    a: 12,
    b: "12345678",
    fn: function () {
        return "WWW";
    },
};
var classOne = /** @class */ (function () {
    // b: string;
    function classOne(aaa, bbb) {
        if (aaa === void 0) { aaa = 66; }
        if (bbb === void 0) { bbb = "6666"; }
        this.a = aaa;
        // this.b = bbb;
    }
    classOne.prototype.fn = function () {
        return "QQQ ".concat(this.a, " === : \"VVV\"}");
    };
    return classOne;
}());
var newClass = new classOne(22, "222");
console.log(aaa);
console.log(aaa.fn());
console.log(newClass);
console.log(newClass.fn());
