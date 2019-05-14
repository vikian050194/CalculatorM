import Integer from "../../../integer/integer";

import assert from "assert";

describe("Integer: gcd", function () {
    it("gcd 29, 13", function () {
        var firstNumber = new Integer("29");
        var secondNumber = new Integer("13");
        var expected = new Integer("1");
    
        var actual = Integer.gcd(firstNumber, secondNumber).d;
    
        assert.deepEqual(actual, expected);
    });
    
    it("gcd 415, 28", function () {
        var firstNumber = new Integer("415");
        var secondNumber = new Integer("1328");
        var expected = new Integer("83");
    
        var actual = Integer.gcd(firstNumber, secondNumber).d;
    
        assert.deepEqual(actual, expected);
    });
});

