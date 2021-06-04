"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToAsterix062Convertor = void 0;
class ToAsterix062Convertor {
    static toBuffer(asterixDataBlock) {
        var len = Buffer.alloc(2);
        len.writeUInt8(asterixDataBlock.getLength() + len.length);
        let buffers = asterixDataBlock.getRecords()
            .map(record => record.getFullRecord())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        return Buffer.concat([this.getCategory(), len, buffers]);
    }
    static getCategory() {
        var cat = Buffer.alloc(1);
        cat.writeUInt8(62);
        return cat;
    }
}
exports.ToAsterix062Convertor = ToAsterix062Convertor;
//# sourceMappingURL=ToAsterix062Convertor.js.map