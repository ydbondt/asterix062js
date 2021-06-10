import { AsterixDataBlock } from "../model/AsterixDataBlock";
import { AsterixRecord } from "../model/AsterixRecord";

export class ToAsterix062Convertor {

    public static toBuffer(asterixDataBlock: AsterixDataBlock): Buffer {
        var len: Buffer = Buffer.alloc(2);

        let buffers: Buffer = asterixDataBlock.getRecords()
                                    .map(record => record.getRecord())
                                    .reduce((b1, b2) => Buffer.concat([b1, b2]));

        let allFrns: number[] = asterixDataBlock.getRecords()
                                .map(record => record.getFSpec().getFRN());

        let buff = Buffer.concat([this.getCategory(), len, this.fspecs(allFrns), buffers]);
        buff.writeUInt16BE(buff.length, 1);

        console.log(buff);
        return buff;
    }

    private static getCategory():Buffer {
        var cat = Buffer.alloc(1)
        cat.writeUInt8(62);

        return cat;
    }

    private static fspecs(frns: number[]): Buffer {
        const maxFrns = Math.max(...frns);
        const octet = Math.ceil(maxFrns / 7);
        const fspec = Buffer.alloc(octet);
        for (var i=0;i<octet-1;i++) {
            fspec[i] = 0b1;
        }
        for(const frn of frns) {
            const shift = 8 - (frn % 7);
            fspec[Math.floor(frn / 7)] |= (1 << shift);
        }

        return fspec;
    }
}