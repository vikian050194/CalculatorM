const updateQuery = (state) => {
    //\u2630

    $("#query").html(state.firstArgument.toString());
};

export { updateQuery };