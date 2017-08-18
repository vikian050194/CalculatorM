function AddDigitActionCreator(digit) {
    return {
        type: 'addDigit',
        digit: digit //or better name it 'value'?
    }
}

function AddOperatorActionCreator(operator) {
    return {
        type: 'addOperator',
        operator: operator //or better name it 'value'?
    }
}

function CalculateActionCreator() {
    return {
        type: 'calculate'
    }
}

function SetModuleActionCreator(module) {
    return {
        type: 'setModule',
        module: module //or better name it 'value'?
    }
}

function ClearActionCreator() {
    return {
        type: 'clear'
    }
}

function AddToMemoryActionCreator() {
    return {
        type: 'addToMemory'
    }
}

function GetFromMemoryActionCreator() {
    return {
        type: 'getFromMemory'
    }
}