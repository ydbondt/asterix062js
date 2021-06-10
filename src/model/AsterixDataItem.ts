import { Cat062FSpec } from "./Cat062FSpec";

export abstract class AsterixDataItem {

    public abstract getFSpec(): Cat062FSpec;
    public abstract getBuffer(): Buffer;

}