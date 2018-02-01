var Integer = require('./../integer/integer');

function TestState() {
    this.firstArgument = new Integer('0');
    this.secondArgument = null;
    this.operator = '';
    this.module = new Integer('0');
    this.memory = null;
    this.query = '';
    this.result = null;
    this.positiveCookie = false;
    this.moduleCookie = true;
}

module.exports = TestState;