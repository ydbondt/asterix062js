"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterixDataBlock = void 0;
const ToAsterix062Convertor_1 = require("../convertor/ToAsterix062Convertor");
class AsterixDataBlock {
    toBuffer() {
        return ToAsterix062Convertor_1.ToAsterix062Convertor.toBuffer(this);
    }
    /**
     * @returns asterix records sorted on their field reference number
     */
    getRecords() {
        return Object.values(this)
            .sort((a, b) => a.getFSpec().getFRN() - b.getFSpec().getFRN());
    }
}
exports.AsterixDataBlock = AsterixDataBlock;
//# sourceMappingURL=AsterixDataBlock.js.map