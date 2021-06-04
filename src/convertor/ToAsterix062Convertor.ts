import { AsterixDataBlock } from "../model/AsterixDataBlock";
import { AsterixRecord } from "../model/AsterixRecord";

export class ToAsterix062Convertor {

    public static toBuffer(asterixDataBlock: AsterixDataBlock): Buffer {
        var len: Buffer = Buffer.alloc(2);
        len.writeUInt8(asterixDataBlock.getLength() + len.length);

        let buffers: Buffer = asterixDataBlock.getRecords()
                                    .map(record => record.getFullRecord())
                                    .reduce((b1, b2) => Buffer.concat([b1, b2]));


        return Buffer.concat([this.getCategory(), len, buffers]);
    }

    private static getCategory():Buffer {
        var cat = Buffer.alloc(1)
        cat.writeUInt8(62);

        return cat;
    }
}