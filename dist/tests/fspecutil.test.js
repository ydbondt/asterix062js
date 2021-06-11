"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FspecUtil_1 = require("../src/convertor/FspecUtil");
const assert_1 = __importDefault(require("assert"));
describe("Fspecutil", () => {
    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil_1.FspecUtil.fspecs([1]);
        assert_1.default.strictEqual(buffer[0], 0b1000000);
    });
    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil_1.FspecUtil.fspecs([9]);
        assert_1.default.strictEqual(buffer[0], 0b1);
        assert_1.default.strictEqual(buffer[1], 0b01000000);
    });
    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil_1.FspecUtil.fspecs([16]);
        assert_1.default.strictEqual(buffer[0], 0b1);
        assert_1.default.strictEqual(buffer[1], 0b1);
        assert_1.default.strictEqual(buffer[2], 0b01000000);
    });
    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil_1.FspecUtil.fspecs([14]);
        assert_1.default.strictEqual(buffer[0], 0b1);
        assert_1.default.strictEqual(buffer[1], 0b00000010);
    });
    it("Loop", () => {
        for (var i = 1; i < 40; i++) {
            let buffer = FspecUtil_1.FspecUtil.fspecs([i]);
            //process.stdout.write(i + "=");
            //console.log(buffer);
        }
    });
});
//# sourceMappingURL=fspecutil.test.js.map