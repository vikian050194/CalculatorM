function createAction(type) {
    return function (value) {
        return {
            type: type,
            value: value
        }
    }
}

module.exports = createAction;