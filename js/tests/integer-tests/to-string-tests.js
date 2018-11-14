import Integer from "../../integer/integer";

import assert from "assert";

describe("Integer: toString", function () {
    it("Zero", function () {
        var number = new Integer();

        assert.equal(number.toString(), "0");
    });

    it("Forty two", function () {
        var number = new Integer("42");

        assert.deepEqual(number.toString(), "42");
    });

    it("Minus forty two", function () {
        var number = new Integer("-42");

        assert.deepEqual(number.toString(), "-42");
    });
});