import {FspecUtil} from "../src/convertor/FspecUtil";
import assert from "assert";

describe("Fspecutil", () => {
    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil.fspecs([1])
        assert.strictEqual(buffer[0], 0b1000000)
    })

    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil.fspecs([9])
        assert.strictEqual(buffer[0], 0b1)
        assert.strictEqual(buffer[1], 0b01000000)
    })

    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil.fspecs([16])
        assert.strictEqual(buffer[0], 0b1)
        assert.strictEqual(buffer[1], 0b1)
        assert.strictEqual(buffer[2], 0b01000000)
    })

    it("Should calculate shift correctly", () => {
        let buffer = FspecUtil.fspecs([14])
        assert.strictEqual(buffer[0], 0b1)
        assert.strictEqual(buffer[1], 0b00000010)
    })

    it("Loop", () => {
        for (var i = 1;i<40;i++) {
            let buffer = FspecUtil.fspecs([i])
            //process.stdout.write(i + "=");
            //console.log(buffer);
        }
    })



})

