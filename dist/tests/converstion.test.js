"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asterix062Record_1 = require("../src/model/Asterix062Record");
const SicSac_1 = require("../src/model/records/SicSac");
const TrackNumber_1 = require("../src/model/records/TrackNumber");
const PositionWGS84_1 = require("../src/model/records/PositionWGS84");
const FlightPlanRelatedData_1 = require("../src/model/records/FlightPlanRelatedData");
const CallSign_1 = require("../src/model/records/item390/CallSign");
const assert_1 = __importDefault(require("assert"));
describe('Bits are correct', function () {
    it('Test simple properties', function () {
        let asterixMessage = new Asterix062Record_1.Asterix062Record();
        asterixMessage.sicSac = new SicSac_1.SicSac(241, 6);
        asterixMessage.trackNumber = new TrackNumber_1.TrackNumber(123);
        asterixMessage.positionWGS84 = new PositionWGS84_1.PositionWGS84(10, 12);
        let buff = asterixMessage.getBuffer();
        assert_1.default.strictEqual(buff[0], 62, "Should be 62");
        assert_1.default.strictEqual(buff[1] + buff[2], 17, "Should be 17");
        assert_1.default.strictEqual(buff[3], 0b10001001); // 1, 5
        assert_1.default.strictEqual(buff[4], 0b00001000); // 12
    });
    it('Test Flight Plan Related Data properties', function () {
        let asterixMessage = new Asterix062Record_1.Asterix062Record();
        asterixMessage.sicSac = new SicSac_1.SicSac(241, 6);
        asterixMessage.flightPlanRelatedData = new FlightPlanRelatedData_1.FlightPlanRelatedData();
        asterixMessage.flightPlanRelatedData.callSign = new CallSign_1.CallSign("123");
        let buff = asterixMessage.getBuffer();
        assert_1.default.strictEqual(buff[0], 62, "Should be 62");
        //assert.strictEqual(buff[1] + buff[2], 17, "Should be 17");
        assert_1.default.strictEqual(buff[3], 0b10000001); // 1
        assert_1.default.strictEqual(buff[4], 0b00000001); // Nothing
        assert_1.default.strictEqual(buff[5], 0b00000010); // 21
    });
});
//# sourceMappingURL=converstion.test.js.map