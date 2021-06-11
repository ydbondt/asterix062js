import { ToAsterix062Convertor } from '../convertor/ToAsterix062Convertor';
import { AsterixDataItem } from './AsterixDataItem';

export abstract class AsterixRecord {

    public abstract getBuffer(): Buffer;

    /**
     * @returns asterix records sorted on their field reference number
     */
    public getRecords(): AsterixDataItem[] {
        return (Object.values(this) as AsterixDataItem[])
                        .sort((a, b) => a.getFSpec().getFRN() - b.getFSpec().getFRN());
    }

}