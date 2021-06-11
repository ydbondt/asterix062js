"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterixFSpec = void 0;
class AsterixFSpec {
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
exports.AsterixFSpec = AsterixFSpec;
//# sourceMappingURL=AsterixFSpec.js.map