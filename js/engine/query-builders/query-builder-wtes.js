function QueryBuilder() {
    this.getQuery = function (model) {
        var line = new String();
        line += model.firstArgument;
        if (model.operator !== '') {
            line += ' ' + model.operator;
        }
        if (model.secondArgument !== null) {
            line += ' ' + model.secondArgument;
        } else {
            if (model.operator !== '') {
                line += ' ';
            }
        }
        if (model.result === null) {
            line += '_';
        }
        if (model.module !== 0 && model.result !== null) {
            line += '  \u2630 ' + model.result + '_' + ' mod ' + model.module;
        } else {
            if (model.result !== null) {
                line += ' = ' + model.result + '_';
            }
            if (model.module !== 0) {
                line += ' mod ' + model.module;
            }
        }
        return line;
    }
}