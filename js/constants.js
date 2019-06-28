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
    ADD: "ADD",
    SUB: "SUB",
    MUL: "MUL",
    DIV: "DIV",
    MOD: "MOD",
    POW: "POW"
};

export {
    SETTINGS,
    DEFAULT_SETTINGS,
    THEMES,
    OPERATORS
};
