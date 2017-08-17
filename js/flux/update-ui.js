function UpdateUI(state) {
    if(state.secondArgument === 0)
        $('#output').val(state.firstArgument);
    else
        $('#output').val(state.secondArgument);
}