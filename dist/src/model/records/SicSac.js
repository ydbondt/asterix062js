"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SicSac = void 0;
const AsterixRecord_1 = require("../AsterixRecord");
const Cat062FSpec_1 = require("../Cat062FSpec");
class SicSac extends AsterixRecord_1.AsterixRecord {
    constructor(sic, sac) {
        super();
        this.sic = sic;
        this.sac = sac;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_010;
    }
    getRecord() {
        var sic = Buffer.alloc(1);
        var sac = Buffer.alloc(1);
        sac.writeUInt8(this.sic); // sic
        sic.writeUInt8(this.sac); // sac
        return Buffer.concat([sic, sac]);
    }
}
exports.SicSac = SicSac;
//# sourceMappingURL=SicSac.js.map