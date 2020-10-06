import Integer from "../../../integer";

import assert from "assert";

describe("Integer: div", function () {
    it("div 7 by 3", function () {
        const a = new Integer("7");
        const b = new Integer("3");
        const expectedQ = new Integer("2");
        const expectedR = new Integer("1");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div 7 by -3", function () {
        const a = new Integer("7");
        const b = new Integer("-3");
        const expectedQ = new Integer("-2");
        const expectedR = new Integer("1");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div -7 by 3", function () {
        const a = new Integer("-7");
        const b = new Integer("3");
        const expectedQ = new Integer("-3");
        const expectedR = new Integer("2");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div -7 by -3", function () {
        const a = new Integer("-7");
        const b = new Integer("-3");
        const expectedQ = new Integer("3");
        const expectedR = new Integer("2");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div 3 by 7", function () {
        const a = new Integer("3");
        const b = new Integer("7");
        const expectedQ = new Integer();
        const expectedR = new Integer("3");

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div 7 by 7", function () {
        const a = new Integer("7");
        const b = new Integer("7");
        const expectedQ = new Integer("1");
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div 9 by 3", function () {
        const a = new Integer("9");
        const b = new Integer("3");
        const expectedQ = new Integer("3");
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });

    it("div 0 by 7", function () {
        const a = new Integer();
        const b = new Integer("7");
        const expectedQ = new Integer();
        const expectedR = new Integer();

        const actualQ = Integer.div(a, b);
        const actualR = Integer.mod(a, b);

        assert.deepStrictEqual(actualQ, expectedQ);
        assert.deepStrictEqual(actualR, expectedR);
    });
});