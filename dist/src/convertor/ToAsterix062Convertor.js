"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToAsterix062Convertor = void 0;
class ToAsterix062Convertor {
    static toBuffer(asterixDataBlock) {
        var len = Buffer.alloc(2);
        let buffers = asterixDataBlock.getRecords()
            .map(record => record.getBuffer())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        let allFrns = asterixDataBlock.getRecords()
            .map(record => record.getFSpec().getFRN());
        let buff = Buffer.concat([this.getCategory(), len, this.fspecs(allFrns), buffers]);
        buff.writeUInt16BE(buff.length, 1);
        return buff;
    }
    static getCategory() {
        var cat = Buffer.alloc(1);
        cat.writeUInt8(62);
        return cat;
    }
    static fspecs(frns) {
        const maxFrns = Math.max(...frns);
        const octet = Math.ceil(maxFrns / 7);
        const fspec = Buffer.alloc(octet);
        for (var i = 0; i < octet - 1; i++) {
            fspec[i] = 0b1;
        }
        for (const frn of frns) {
            const shift = 8 - (frn % 7);
            fspec[Math.floor(frn / 7)] |= (1 << shift);
        }
        return fspec;
    }
}
exports.ToAsterix062Convertor = ToAsterix062Convertor;
//# sourceMappingURL=ToAsterix062Convertor.js.map