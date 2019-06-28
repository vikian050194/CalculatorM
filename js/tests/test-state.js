import Integer from "./../integer";

function TestState() {
    this.firstArgument = new Integer();
    this.secondArgument = null;
    this.operator = null;
    this.module = null;
    this.memory = null;
    this.result = null;
    this.positiveCookie = true;
    this.moduleCookie = true;
}

export default TestState;