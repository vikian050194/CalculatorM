function UpdateUI(state) {
    var query = new QueryBuilder();
    if (state.secondArgument === null)
        $('#output').val(state.firstArgument);
    else
        $('#output').val(state.secondArgument);
    $('#query').val(query.getQuery(state));
}