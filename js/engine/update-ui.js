function UpdateUI(state) {
    if (state.secondArgument === null) {
        $('#output').val(state.firstArgument);
    } else {
        $('#output').val(state.secondArgument);
    }
    if (state.result !== null) {
        $('#output').val(state.result);
    }
    $('#query').val(state.query);
}