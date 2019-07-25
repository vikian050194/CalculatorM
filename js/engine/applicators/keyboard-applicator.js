import createAction from "../action-creator";
import { ACTIONS, OPERATORS } from "./../../constants";

function keyboardApplicator(calculatorStore) {
    const applyOperator = function () {
        const operators = {
            "+": OPERATORS.ADD,
            "-": OPERATORS.SUB,
            "*": OPERATORS.MUL,
            "/": OPERATORS.DIV,
            "%": OPERATORS.MOD,
            "^": OPERATORS.POW
        };

        document.addEventListener("keydown", (e) => {
            const value = operators[e.key];

            if (value !== undefined) {
                calculatorStore.dispatch(createAction(ACTIONS.ADD_OPERATOR)(value));
            }
        });
    };

    applyOperator();

    const applyDigit = function () {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        document.addEventListener("keydown", (e) => {
            const key = parseInt(e.key);

            if (digits.indexOf(key) !== -1) {
                calculatorStore.dispatch(createAction(ACTIONS.ADD_DIGIT)(key));
            }
        });
    };

    applyDigit();

    document.addEventListener("keydown", logKey);

    function logKey(e) {
        console.info(e.keyCode);
    }

    const applyNavigation = function () {
        const leftArrowKeyCode = 37;
        const rightArrowKeyCode = 39;

        document.addEventListener("keydown", (e) => {
            if (e.keyCode === leftArrowKeyCode) {
                calculatorStore.dispatch(createAction(ACTIONS.MOVE_LEFT)());
            }

            if (e.keyCode === rightArrowKeyCode) {
                calculatorStore.dispatch(createAction(ACTIONS.MOVE_RIGHT)());
            }
        });
    };

    applyNavigation();
}

export { keyboardApplicator };