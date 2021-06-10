"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat062FSpec = void 0;
class Cat062FSpec {
    constructor(frn) {
        this.frn = frn;
    }
    getBuffer() {
        var octet = Math.ceil(this.frn / 7);
        var fspec = Buffer.alloc(octet);
        for (var i = 0; i < octet - 1; i++) {
            fspec[i] = 0b1;
        }
        let shift = 8 - (this.frn % 7);
        fspec[fspec.length - 1] = 1 << shift;
        return fspec;
    }
    /**
     * @returns Field Reference Number
     */
    getFRN() {
        return this.frn;
    }
}
exports.Cat062FSpec = Cat062FSpec;
Cat062FSpec.I062_010 = new Cat062FSpec(1);
Cat062FSpec.I062_070 = new Cat062FSpec(4);
Cat062FSpec.I062_105 = new Cat062FSpec(5);
Cat062FSpec.I062_040 = new Cat062FSpec(12);
Cat062FSpec.I062_080 = new Cat062FSpec(13);
//# sourceMappingURL=Cat062FSpec.js.map