"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asterix062Record = void 0;
const ToAsterix062Convertor_1 = require("../convertor/ToAsterix062Convertor");
class Asterix062Record {
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
exports.Asterix062Record = Asterix062Record;
//# sourceMappingURL=Asterix062Record.js.map