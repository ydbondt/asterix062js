"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SicSac = void 0;
const AsterixDataItem_1 = require("../AsterixDataItem");
const Cat062FSpec_1 = require("../Cat062FSpec");
class SicSac extends AsterixDataItem_1.AsterixDataItem {
    constructor(sic, sac) {
        super();
        this.sic = sic;
        this.sac = sac;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_010;
    }
    getBuffer() {
        var sic = Buffer.alloc(1);
        var sac = Buffer.alloc(1);
        sic.writeUInt8(this.sic); // sic
        sac.writeUInt8(this.sac); // sac
        return Buffer.concat([sac, sic]);
    }
}
exports.SicSac = SicSac;
//# sourceMappingURL=SicSac.js.map