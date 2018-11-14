import Integer from "../../integer/integer";

import assert from "assert";

describe("Integer: push", function () {
    it("Push zero digit", function () {
        var number = new Integer();

        number.push(0);

        assert.deepEqual(number, new Integer());
    });

    it("Push non zero digit", function () {
        var number = new Integer();

        number.push(7);

        assert.deepEqual(number, new Integer("7"));
    });
});

describe("Integer: pop", function () {
    it("Pop from zero", function () {
        var number = new Integer();

        number.pop();

        assert.deepEqual(number, new Integer());
    });

    it("Pop from single digit number", function () {
        var number = new Integer("7");

        number.pop();

        assert.deepEqual(number, new Integer());
    });

    it("Pop from two digits number", function () {
        var number = new Integer("42");

        number.pop();

        assert.deepEqual(number, new Integer("4"));
    });
});