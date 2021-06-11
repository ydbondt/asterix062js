"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterixRecord = void 0;
class AsterixRecord {
    /**
     * @returns asterix records sorted on their field reference number
     */
    getRecords() {
        return Object.values(this)
            .sort((a, b) => a.getFSpec().getFRN() - b.getFSpec().getFRN());
    }
}
exports.AsterixRecord = AsterixRecord;
//# sourceMappingURL=AsterixRecord.js.map