function QueryBuilder() {
    this.getQuery = function (model) {
        var line = "";
        line = model.firstArgument;
        if (model.operator !== '') {
            line += model.operator + model.secondArgument;

        }
        if (model.module != 0) {
            line += "mod" + model.module;
        }
        return line;
    }
}