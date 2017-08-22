function AddDigitActionCreator(value) {
    return {
        type: 'addDigit',
        value: value
    }
}

function AddOperatorActionCreator(value) {
    return {
        type: 'addOperator',
        value: value
    }
}

function CalculateActionCreator() {
    return {
        type: 'calculate'
    }
}

function SetToZeroActionCreator() {
    return {
        type: 'setToZero'
    }
}

function SetModuleActionCreator(value) {
    return {
        type: 'setModule',
        value: value
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

function ClearMemoryActionCreator() {
    return {
        type: 'clearMemory'
    }
}

function DeleteDigitActionCreator() {
    return {
        type: 'deleteDigit'
    }
}

function UndoActionCreator() {
    return {
        type: 'undo'
    }
}

function RedoActionCreator() {
    return {
        type: 'redo'
    }
}