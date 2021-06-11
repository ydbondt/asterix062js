import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";
import {FspecUtil} from "../../convertor/FspecUtil";

export class ReservedExpansionField extends AsterixDataItem {

    public constructor() {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.RE;
    }

    public getBuffer(): Buffer {
        var lat = Buffer.from("545454")

        var len = Buffer.alloc(1);
        len.writeUInt8(lat.length+1);

        return Buffer.concat([len, lat]);
    }

}
