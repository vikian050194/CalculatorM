function updateResult(state) {
    if (state.result) {
        $("#result").html(state.result.toString());
    } else {
        $("#result").html("");
    }
}

export { updateResult };