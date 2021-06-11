import { AsterixRecord } from "../model/AsterixRecord";
import {FspecUtil} from "./FspecUtil";

export class ToAsterix062Convertor {

    public static toBuffer(asterixDataBlock: AsterixRecord): Buffer {
        let len: Buffer = Buffer.alloc(2);
        let buffers: Buffer = asterixDataBlock.getRecords()
                                    .map(record => record.getBuffer())
                                    .reduce((b1, b2) => Buffer.concat([b1, b2]));

        let allFrns: number[] = asterixDataBlock.getRecords()
                                .map(record => record.getFSpec().getFRN());

        console.log("FRNs: " + allFrns)

        let buff = Buffer.concat([this.getCategory(), len, FspecUtil.fspecs(allFrns), buffers]);
        buff.writeUInt16BE(buff.length, 1);

        console.log("Lengths: " + buff.length)
        return buff;

    }

    private static getCategory():Buffer {
        var cat = Buffer.alloc(1)
        cat.writeUInt8(62);

        return cat;
    }

}