import {Asterix062Record} from "../src/model/Asterix062Record";
import {SicSac} from "../src/model/records/SicSac";
import {TrackNumber} from "../src/model/records/TrackNumber";
import {CNF, FX, MON, MRH, SPI, SRC, TrackStatus} from "../src/model/records/TrackStatus";
import {Timestamp} from "../src/model/records/Timestamp";
import {PositionWGS84} from "../src/model/records/PositionWGS84";
import {FlightPlanRelatedData} from "../src/model/records/FlightPlanRelatedData";
import {CallSign} from "../src/model/records/item390/CallSign";
import assert from "assert";

describe('Bits are correct', function() {
    it('Test simple properties', function() {
        let asterixMessage = new Asterix062Record();
        asterixMessage.sicSac = new SicSac(241, 6);
        asterixMessage.trackNumber = new TrackNumber(123);
        asterixMessage.positionWGS84 = new PositionWGS84(10, 12);

        let buff = asterixMessage.getBuffer();

        assert.strictEqual(buff[0], 62, "Should be 62");
        assert.strictEqual(buff[1] + buff[2], 17, "Should be 17");
        assert.strictEqual(buff[3], 0b10001001); // 1, 5
        assert.strictEqual(buff[4], 0b00001000); // 12
    })

    it('Test Flight Plan Related Data properties', function() {
        let asterixMessage = new Asterix062Record();
        asterixMessage.sicSac = new SicSac(241, 6);
        asterixMessage.flightPlanRelatedData = new FlightPlanRelatedData();
        asterixMessage.flightPlanRelatedData.callSign = new CallSign("123");

        let buff = asterixMessage.getBuffer();
        assert.strictEqual(buff[0], 62, "Should be 62");
        //assert.strictEqual(buff[1] + buff[2], 17, "Should be 17");

        assert.strictEqual(buff[3], 0b10000001); // 1
        assert.strictEqual(buff[4], 0b00000001); // Nothing
        assert.strictEqual(buff[5], 0b00000010); // 21
    })
});