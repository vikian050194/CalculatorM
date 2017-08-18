function UpdateUI(state) {
    if(state.secondArgument === null)
        $('#output').val(state.firstArgument);
    else
        $('#output').val(state.secondArgument);
}