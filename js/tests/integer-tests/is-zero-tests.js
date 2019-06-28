import Integer from "../../integer";

import assert from "assert";

describe("Integer: ctor", function () {
    it("Zero", function () {
        var number = new Integer();

        assert.equal(number.isZero, true);
    });

    it("Non zero", function () {
        var number = new Integer("42");

        assert.equal(number.isZero, false);
    });
});