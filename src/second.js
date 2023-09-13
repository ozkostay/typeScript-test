// interface intSecond {
//   a: number;
//   b?: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var absSecond = /** @class */ (function () {
    function absSecond(aaa, bbb) {
        this.a = aaa;
        this.b = bbb;
    }
    absSecond.prototype.fn = function () {
        console.log("DDDDDDDDDDD");
    };
    return absSecond;
}());
var clsSecond = /** @class */ (function (_super) {
    __extends(clsSecond, _super);
    function clsSecond(aaa, bbb) {
        var _this = _super.call(this, aaa, bbb) || this;
        _this.a = aaa;
        // this.b = bbb;
        _this.c = 111;
        return _this;
    }
    return clsSecond;
}(absSecond));
// const aaa2: absSecond = {
//   a: 1112,
//   // b: "123",
// };
var aaa2 = new clsSecond(333, "333");
console.log("aaa2", aaa2);
aaa2.fn();
