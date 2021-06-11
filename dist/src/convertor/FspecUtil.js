"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FspecUtil = void 0;
class FspecUtil {
    static fspecs(frns) {
        const maxFrns = Math.max(...frns);
        const octet = Math.ceil(maxFrns / 7);
        const fspec = Buffer.alloc(octet);
        for (var i = 0; i < octet - 1; i++) {
            fspec[i] = 0b1;
        }
        for (const frn of frns) {
            let mod = frn % 7;
            const shift = 8 - ((mod === 0) ? 7 : mod);
            fspec[Math.floor(frn / 7)] |= (1 << shift);
        }
        return fspec;
    }
}
exports.FspecUtil = FspecUtil;
//# sourceMappingURL=FspecUtil.js.map