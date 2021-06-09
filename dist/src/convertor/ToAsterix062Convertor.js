"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToAsterix062Convertor = void 0;
class ToAsterix062Convertor {
    static toBuffer(asterixDataBlock) {
        var len = Buffer.alloc(2);
        let length = this.getCategory().length + asterixDataBlock.getLength() + len.length;
        len.writeUInt16BE(length);
        console.log(length);
        /*let buffers: Buffer = asterixDataBlock.getRecords()
                                    .map(record => record.getFullRecord())
                                    .reduce((b1, b2) => Buffer.concat([b1, b2]));*/
        let fspecs = asterixDataBlock.getRecords()
            .map(record => record.getFSpec().getFSpec())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        let records = asterixDataBlock.getRecords()
            .map(record => record.getRecord())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        return Buffer.concat([this.getCategory(), len, fspecs, records]);
    }
    static getCategory() {
        var cat = Buffer.alloc(1);
        cat.writeUInt8(62);
        return cat;
    }
}
exports.ToAsterix062Convertor = ToAsterix062Convertor;
//# sourceMappingURL=ToAsterix062Convertor.js.map