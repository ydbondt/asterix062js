import {AsterixFSpec} from "./AsterixFSpec";

export abstract class AsterixDataItem {

    public abstract getFSpec(): AsterixFSpec;
    public abstract getBuffer(): Buffer;

}