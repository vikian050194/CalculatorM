function QueryBuilder() {
    this.getQuery = function (model) {
        var line = new String();

        if (model.firstArgument.isZero && model.operator === "") {
            if (model.module.isZero) {
                return "_";
            } else {
                return "_ mod " + model.module.toString();
            }
        }

        line += model.firstArgument.toString();

        if (model.operator !== "") {
            line += " " + model.operator;
        }

        if (model.secondArgument !== null) {
            line += " " + model.secondArgument.toString();
        } else {
            if (model.operator !== "") {
                line += " ";
            }
        }

        if (model.result === null) {
            line += "_";
        }

        if (!model.module.isZero && model.result !== null) {
            line += " \u2630 " + model.result.toString() + "_" + " mod " + model.module.toString();
        } else {
            if (model.result !== null) {
                line += " = " + model.result.toString() + "_";
            }
            if (!model.module.isZero) {
                line += " mod " + model.module.toString();
            }
        }

        return line;
    };
}

export default QueryBuilder;