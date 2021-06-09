import { AsterixRecord } from "../AsterixRecord";
import { Cat062FSpec } from "../Cat062FSpec";

export class TrackStatus extends AsterixRecord {

    public constructor(private readonly mon: MON,
                       private readonly spi: SPI,
                       private readonly mrh: MRH,
                       private readonly src: SRC,
                       private readonly cnf: CNF,
                       private readonly fx: FX) {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_080;
    }

    public getRecord(): Buffer {
        var trackStatus = Buffer.alloc(1);
        trackStatus[0] = this.mon.byteValue;
        trackStatus[0] &= this.spi.byteValue;
        trackStatus[0] &= this.mrh.byteValue;
        trackStatus[0] &= this.src.byteValue;
        trackStatus[0] &= this.cnf.byteValue;
        trackStatus[0] &= this.fx.byteValue;


        return trackStatus;
    }

}

export class MON {

    public static MULTI_SENSOR: MON = new MON(0);
    public static MONO_SENSOR: MON = new MON(1);

    private constructor(public readonly byteValue: number) {

    }
}

export class SPI {

    public static DEFAULT_VALUE: SPI = new SPI(0);

    /**
     * SPI present in the last report received from a sensor
     * capable of decoding this data
     */
    public static SPI_PRESENT: SPI = new SPI(1);

    private constructor(public readonly byteValue: number) {

    }
}

/**
 * Most reliable height
 */
export class MRH {

    public static BAROMETRIC_ALTITUDE: MRH = new MRH(0);
    public static GEOMETRIC_ALTITUDE: MRH = new MRH(1);

    private constructor(public readonly byteValue: number) {
    }
}

/**
 * Source of calculated track altitude for I062/130
 */
export class SRC {

    public static NO_SOURCE: SRC = new SRC(0b000);
    public static GNSS: SRC = new SRC(0b001);
    public static RADAR_3D: SRC = new SRC(0b010);
    public static TRIANGULATION: SRC = new SRC(0b011);
    public static HEIGHT_FROM_COVERAGE: SRC = new SRC(0b100);
    public static SPEED_LOOKUP_TABLE: SRC = new SRC(0b101);
    public static DEFAULT_HEIGHT: SRC = new SRC(0b110);
    public static MULTILATERATION: SRC = new SRC(0b111);

    private constructor(public readonly byteValue: number) {
    }
}

export class CNF {

    public static CONFIRMED_TRACK: CNF = new CNF(0);
    public static TENTATIVE_TRACK: CNF = new CNF(1);

    private constructor(public readonly byteValue: number) {
    }
}

export class FX {

    public static END_OF_DATA_ITEM: FX = new FX(0);
    public static EXTENSION: FX = new FX(1);

    private constructor(public readonly byteValue: number) {
    }
}
