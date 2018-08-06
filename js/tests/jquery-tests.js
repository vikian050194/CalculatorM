var assert = require('assert');

var applyJQuery = require('./apply-jquery');
applyJQuery();

function Foo(value) {
    this.value = value;
    this.test = function(){
        return 'test';
    };
}

describe('jQuery.extend', function () {

    it('deep merge', function () {
        var v = new Foo(1);
        var a = { "k": v };

        //var b = $.extend(true, {}, a);
        var b = JSON.parse(JSON.stringify(a));//$.extend(true, {}, a);
        b.k.prototype = Foo.prototype;
        v.value = 42;
        console.log(b.k);
        assert.equal(b.k.value, 1);
    });

});