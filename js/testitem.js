function TestItem() {
    this.name = '';
    this.expectedObject = undefined;
    this.author = '';
    this.test = undefined;

    this.initializeTestItem = function(testObject) {
        this.name = testObject.name;
        this.expectedObject = testObject.expected;
        this.test = testObject.test;
        this.author = testObject.author;
    };
}