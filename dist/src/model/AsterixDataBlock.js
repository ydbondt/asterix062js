"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterixDataBlock = void 0;
const ToAsterix062Convertor_1 = require("../convertor/ToAsterix062Convertor");
class AsterixDataBlock {
    toBuffer() {
        return ToAsterix062Convertor_1.ToAsterix062Convertor.toBuffer(this);
    }
    getRecords() {
        return Object.values(this);
    }
    getLength() {
        return Object.values(this)
            .map((record) => record.getFullRecord().length)
            .reduce((fullLength = 0, length) => fullLength + length);
    }
}
exports.AsterixDataBlock = AsterixDataBlock;
//# sourceMappingURL=AsterixDataBlock.js.map