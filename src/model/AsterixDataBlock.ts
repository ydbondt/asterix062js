import { ToAsterix062Convertor } from '../convertor/ToAsterix062Convertor';
import { AsterixRecord } from './AsterixRecord';
import { PositionWGS84 } from './records/PositionWGS84';
import { SicSac } from './records/SicSac';
import { Timestamp } from './records/Timestamp';
import { TrackNumber } from './records/TrackNumber';
import { TrackStatus } from './records/TrackStatus';

export class AsterixDataBlock {

    public sicSac: SicSac;
    public trackNumber: TrackNumber;
    public timestamp: Timestamp;
    public trackStatus: TrackStatus;
    public positionWGS84: PositionWGS84;

    public toBuffer(): Buffer {
        return ToAsterix062Convertor.toBuffer(this);
    }

    /**
     * @returns asterix records sorted on their field reference number
     */
    public getRecords(): AsterixRecord[] {
        return (Object.values(this) as AsterixRecord[])
                        .sort((a, b) => a.getFSpec().getFRN() - b.getFSpec().getFRN());
    }

    public getLength(): number {
        return Object.values(this)
            .map((record: AsterixRecord) => record.getFullRecord().length)
            .reduce((fullLength=0, length: number) => fullLength + length);
    }

}