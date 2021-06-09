import { Cat062FSpec } from "./Cat062FSpec";

export abstract class AsterixRecord {

    public abstract getFSpec(): Cat062FSpec;
    public abstract getRecord(): Buffer;

    public getFullRecord(): Buffer {
        return Buffer.concat([this.getFSpec().getFSpec(), this.getRecord()]);
    }

}