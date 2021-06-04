import { ToAsterix062Convertor } from '../convertor/ToAsterix062Convertor';
import { AsterixRecord } from './AsterixRecord';
import { SicSac } from './records/SicSac';
import { TrackNumber } from './records/TrackNumber';

export class AsterixDataBlock {

    public sicSac: SicSac;
    public trackNumber: TrackNumber;

    public toBuffer(): Buffer {
        return ToAsterix062Convertor.toBuffer(this);
    }

    public getRecords(): AsterixRecord[] {
        return Object.values(this) as AsterixRecord[];
    }

    public getLength(): number {
        return Object.values(this)
            .reduce((prevRecord=0, record: AsterixRecord) => prevRecord + record.getFullRecord().length);
    }

}