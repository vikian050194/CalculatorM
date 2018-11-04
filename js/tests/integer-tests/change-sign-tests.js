import Integer from "../../integer/integer";

import assert from "assert";

describe("Integer: changeSign", function () {
    it("Zero", function () {
        const number = new Integer();
        number.changeSign();

        assert.equal(number.isNegative, false);
    });

    it("Positive number", function () {
        const number = new Integer("42");
        number.changeSign();

        assert.equal(number.isNegative, true);
    });

    it("Negative number", function () {
        const number = new Integer("-42");
        number.changeSign();

        assert.equal(number.isNegative, false);
    });
});