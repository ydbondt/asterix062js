import {AsterixFSpec} from "./AsterixFSpec";

export class Cat062FSpec extends AsterixFSpec {

    static readonly I062_010: Cat062FSpec = new Cat062FSpec(1);
    static readonly I062_070: Cat062FSpec = new Cat062FSpec(4);
    static readonly I062_105: Cat062FSpec = new Cat062FSpec(5);
    static readonly I062_040: Cat062FSpec = new Cat062FSpec(12);
    static readonly I062_080: Cat062FSpec = new Cat062FSpec(13);
    static readonly I062_390: Cat062FSpec = new Cat062FSpec(21);

    static readonly RE: Cat062FSpec = new Cat062FSpec(34);

    protected constructor(frn: number) {
        super(frn);
    }

}