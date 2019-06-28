import Integer from "../../integer";

import assert from "assert";

describe("Integer: areEqual", function () {
    it("Equal positive numbers", function () {
        const firstArgument = new Integer("42"),
            secondArgument = new Integer("42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), true);
    });

    it("Equal negative numbers", function () {
        const firstArgument = new Integer("-42"),
            secondArgument = new Integer("-42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), true);
    });

    it("Not equal positive numbers: equal length", function () {
        const firstArgument = new Integer("42"),
            secondArgument = new Integer("33");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal negative numbers: equal length", function () {
        const firstArgument = new Integer("-42"),
            secondArgument = new Integer("-33");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal positive numbers: equal length", function () {
        const firstArgument = new Integer("33"),
            secondArgument = new Integer("42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal negative numbers: equal length", function () {
        const firstArgument = new Integer("-33"),
            secondArgument = new Integer("-42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal positive numbers: equal length, first negative ", function () {
        const firstArgument = new Integer("-42"),
            secondArgument = new Integer("42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal positive numbers: equal length, second negative ", function () {
        const firstArgument = new Integer("42"),
            secondArgument = new Integer("-42");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal positive numbers: first is longer", function () {
        const firstArgument = new Integer("42"),
            secondArgument = new Integer("3");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal positive numbers: second is longer", function () {
        const firstArgument = new Integer("4"),
            secondArgument = new Integer("33");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal negative numbers: first is longer", function () {
        const firstArgument = new Integer("-42"),
            secondArgument = new Integer("-3");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });

    it("Not equal negative numbers: second is longer", function () {
        const firstArgument = new Integer("-4"),
            secondArgument = new Integer("-33");

        assert.equal(Integer.areEqual(firstArgument, secondArgument), false);
    });
});