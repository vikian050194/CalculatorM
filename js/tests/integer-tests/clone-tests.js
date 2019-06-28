import Integer from "../../integer";

import assert from "assert";

describe("Integer: clone", function () {
    it("Positive number", function () {
        const number = new Integer("42");
        const clone = number.clone();
        clone.digits.push(7);
        clone.isNegative = true;

        assert.deepEqual(clone, new Integer("-742"));
        assert.deepEqual(number, new Integer("42"));
    });
});