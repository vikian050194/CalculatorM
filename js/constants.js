const THEMES = [
    "blue",
    "gray",
    "russia"
];

const SETTINGS = {
    POSITIVE: "positive",
    MODULE: "module",
    THEME: "theme"
};

const DEFAULT_SETTINGS = {
    POSITIVE: true,
    MODULE: true,
    THEME: THEMES[0],
    EXPIRES: 31
};

const OPERATORS = {
    ADD: "add",
    SUB: "sub",
    MUL: "mul",
    DIV: "div",
    MOD: "mod",
    POW: "pow"
};

const ACTIONS = {
    ADD_DIGIT: "addDigit",
    ADD_OPERATOR: "addOperator",
    CHANGE_SIGN: "changeSign",
    CLEAR: "clear",
    DELETE: "delete",
    CHANGE_SETTING: "changeSetting",
    UNDO: "undo",
    REDO: "redo",
    MOVE_LEFT: "moveLeft",
    MOVE_RIGHT: "moveRight"
};

const TOKEN_TYPE = {
    OPERATOR: "operator",
    ARGUMENT: "argument"
};

export {
    SETTINGS,
    DEFAULT_SETTINGS,
    THEMES,
    OPERATORS,
    ACTIONS,
    TOKEN_TYPE
};
