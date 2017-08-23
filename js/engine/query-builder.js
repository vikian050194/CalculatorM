function QueryBuilder() {
    this.getQuery = function (model) {
        var line = new String();
        line += model.firstArgument;
        if (model.operator !== '' && model.operator !== 'calc') {
            line += ' ' + model.operator;
        }
        if (model.secondArgument !== null) {
            line += ' ' + model.secondArgument;
        }
        if (model.module !== 0) {
            line += ' mod ' + model.module;
        }
        return line;
    }
}