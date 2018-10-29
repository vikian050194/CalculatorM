import Integer from "./../integer/integer";

function TestState() {
    this.firstArgument = new Integer();
    this.secondArgument = null;
    this.operator = "";
    this.module = new Integer();
    this.memory = null;
    this.query = "";
    this.result = null;
    this.positiveCookie = false;
    this.moduleCookie = true;
}

export default TestState;