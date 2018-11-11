import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: div", function () {
    it("7 div by 3", function () {
        const a = new Integer("7");
        const b = new Integer("3");
        const expectedQ = new Integer("2");
        const expectedR = new Integer("1");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("7 div by -3", function () {
        const a = new Integer("7");
        const b = new Integer("-3");
        const expectedQ = new Integer("-2");
        const expectedR = new Integer("1");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("-7 div by 3", function () {
        const a = new Integer("-7");
        const b = new Integer("3");
        const expectedQ = new Integer("-3");
        const expectedR = new Integer("2");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("-7 div by -3", function () {
        const a = new Integer("-7");
        const b = new Integer("-3");
        const expectedQ = new Integer("3");
        const expectedR = new Integer("2");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("3 div by 7", function () {
        const a = new Integer("3");
        const b = new Integer("7");
        const expectedQ = new Integer();
        const expectedR = new Integer("3");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("7 div by 7", function () {
        const a = new Integer("7");
        const b = new Integer("7");
        const expectedQ = new Integer("1");
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("9 div by 3", function () {
        const a = new Integer("9");
        const b = new Integer("3");
        const expectedQ = new Integer("3");
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });

    it("0 div by 7", function () {
        const a = new Integer();
        const b = new Integer("7");
        const expectedQ = new Integer();
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepEqual(actualQ, expectedQ);
        assert.deepEqual(actualR, expectedR);
    });
});