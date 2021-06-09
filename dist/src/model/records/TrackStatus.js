"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FX = exports.CNF = exports.SRC = exports.MRH = exports.SPI = exports.MON = exports.TrackStatus = void 0;
const AsterixRecord_1 = require("../AsterixRecord");
const Cat062FSpec_1 = require("../Cat062FSpec");
class TrackStatus extends AsterixRecord_1.AsterixRecord {
    constructor(mon, spi, mrh, src, cnf, fx) {
        super();
        this.mon = mon;
        this.spi = spi;
        this.mrh = mrh;
        this.src = src;
        this.cnf = cnf;
        this.fx = fx;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_080;
    }
    getRecord() {
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
exports.TrackStatus = TrackStatus;
class MON {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.MON = MON;
MON.MULTI_SENSOR = new MON(0);
MON.MONO_SENSOR = new MON(1);
class SPI {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.SPI = SPI;
SPI.DEFAULT_VALUE = new SPI(0);
/**
 * SPI present in the last report received from a sensor
 * capable of decoding this data
 */
SPI.SPI_PRESENT = new SPI(1);
/**
 * Most reliable height
 */
class MRH {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.MRH = MRH;
MRH.BAROMETRIC_ALTITUDE = new MRH(0);
MRH.GEOMETRIC_ALTITUDE = new MRH(1);
/**
 * Source of calculated track altitude for I062/130
 */
class SRC {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.SRC = SRC;
SRC.NO_SOURCE = new SRC(0b000);
SRC.GNSS = new SRC(0b001);
SRC.RADAR_3D = new SRC(0b010);
SRC.TRIANGULATION = new SRC(0b011);
SRC.HEIGHT_FROM_COVERAGE = new SRC(0b100);
SRC.SPEED_LOOKUP_TABLE = new SRC(0b101);
SRC.DEFAULT_HEIGHT = new SRC(0b110);
SRC.MULTILATERATION = new SRC(0b111);
class CNF {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.CNF = CNF;
CNF.CONFIRMED_TRACK = new CNF(0);
CNF.TENTATIVE_TRACK = new CNF(1);
class FX {
    constructor(byteValue) {
        this.byteValue = byteValue;
    }
}
exports.FX = FX;
FX.END_OF_DATA_ITEM = new FX(0);
FX.EXTENSION = new FX(1);
//# sourceMappingURL=TrackStatus.js.map