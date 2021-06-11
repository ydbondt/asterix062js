"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToAsterix062Convertor = void 0;
const FspecUtil_1 = require("./FspecUtil");
class ToAsterix062Convertor {
    static toBuffer(asterixDataBlock) {
        let len = Buffer.alloc(2);
        let buffers = asterixDataBlock.getRecords()
            .map(record => record.getBuffer())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        let allFrns = asterixDataBlock.getRecords()
            .map(record => record.getFSpec().getFRN());
        console.log("FRNs: " + allFrns);
        let buff = Buffer.concat([this.getCategory(), len, FspecUtil_1.FspecUtil.fspecs(allFrns), buffers]);
        buff.writeUInt16BE(buff.length, 1);
        console.log("Lengths: " + buff.length);
        return buff;
    }
    static getCategory() {
        var cat = Buffer.alloc(1);
        cat.writeUInt8(62);
        return cat;
    }
}
exports.ToAsterix062Convertor = ToAsterix062Convertor;
//# sourceMappingURL=ToAsterix062Convertor.js.map