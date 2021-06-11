"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = __importStar(require("dgram"));
const Asterix062Record_1 = require("./src/model/Asterix062Record");
const PositionWGS84_1 = require("./src/model/records/PositionWGS84");
const SicSac_1 = require("./src/model/records/SicSac");
const Timestamp_1 = require("./src/model/records/Timestamp");
const TrackNumber_1 = require("./src/model/records/TrackNumber");
const TrackStatus_1 = require("./src/model/records/TrackStatus");
const FlightPlanRelatedData_1 = require("./src/model/records/FlightPlanRelatedData");
const CallSign_1 = require("./src/model/records/item390/CallSign");
let asterixMessage = new Asterix062Record_1.Asterix062Record();
asterixMessage.sicSac = new SicSac_1.SicSac(241, 6);
asterixMessage.trackNumber = new TrackNumber_1.TrackNumber(123);
asterixMessage.trackStatus = new TrackStatus_1.TrackStatus(TrackStatus_1.MON.MONO_SENSOR, TrackStatus_1.SPI.SPI_PRESENT, TrackStatus_1.MRH.GEOMETRIC_ALTITUDE, TrackStatus_1.SRC.DEFAULT_HEIGHT, TrackStatus_1.CNF.CONFIRMED_TRACK, TrackStatus_1.FX.END_OF_DATA_ITEM);
asterixMessage.timestamp = new Timestamp_1.Timestamp(new Date());
asterixMessage.positionWGS84 = new PositionWGS84_1.PositionWGS84(50.917419, 4.115159);
asterixMessage.flightPlanRelatedData = new FlightPlanRelatedData_1.FlightPlanRelatedData();
asterixMessage.flightPlanRelatedData.callSign = new CallSign_1.CallSign("YOURI-123");
const client = dgram.createSocket('udp4');
client.connect(33003, 'localhost', () => {
    console.log("Connected !");
    client.send(asterixMessage.getBuffer(), (err) => {
        console.log("Message sent ! (err = " + err + ")");
        client.close();
    });
});
//# sourceMappingURL=index.js.map