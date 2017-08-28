function QueryBuilder() {
    this.getQuery = function (model) {
        var line = new String();
        line += model.firstArgument;
        if (model.operator !== '') {
            line += ' ' + model.operator;
        }
        if (model.secondArgument !== null) {
            line += ' ' + model.secondArgument;
        }
        if (model.result !== null) {
            line += ' = ' + model.result;
        }
        if (model.module !== 0) {
            line += ' mod ' + model.module;
        }
        return line;
    }
}