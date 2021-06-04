"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterixRecord = void 0;
class AsterixRecord {
    getFullRecord() {
        return Buffer.concat([this.getFSpec().getFSpec(), this.getRecord()]);
    }
}
exports.AsterixRecord = AsterixRecord;
//# sourceMappingURL=AsterixRecord.js.map