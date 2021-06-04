import { Cat062FSpec } from "./Cat062FSpec";

export abstract class AsterixRecord {

    protected abstract getFSpec(): Cat062FSpec;
    protected abstract getRecord(): Buffer;

    public getFullRecord(): Buffer {
        return Buffer.concat([this.getFSpec().getFSpec(), this.getRecord()]);
    }

}