"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat062FSpec = void 0;
class Cat062FSpec {
    constructor(fspec) {
        this.fspec = fspec;
    }
    getFSpec() {
        var octet = Math.round(this.fspec / 7);
        var fspec = Buffer.alloc(octet);
        console.log("fspec = " + this.fspec);
        console.log("octet = " + octet);
        for (var i = 0; i <= octet; i++) {
            fspec[i] = 0b1;
        }
        let shift = (octet * 7) - this.fspec;
        fspec[fspec.length - 1] = 1 << ((shift > 0) ? shift : this.fspec);
        console.log("shift = " + shift);
        console.log("fspec[" + (fspec.length - 1) + "] = " + ((shift > 0) ? "1 << shift" : "0b1"));
        return fspec;
    }
}
exports.Cat062FSpec = Cat062FSpec;
Cat062FSpec.I062_010 = new Cat062FSpec(7);
Cat062FSpec.I062_040 = new Cat062FSpec(11);
//# sourceMappingURL=Cat062FSpec.js.map