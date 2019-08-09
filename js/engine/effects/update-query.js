const updateQuery = (state) => {
    const cursor = "<span class=\"blinking-cursor\">I</span>";
    let content = state.query.items.map((i, index) => { let term = `<span>${i}</span>`; return state.query.index === index ? term + cursor : term; }).join("<span>&nbsp;</span>");
    content = content === "" ? cursor : content;
    content = state.query.index === -1 ? cursor + content : content;
    $("#query").html(content);
    document.getElementsByClassName("blinking-cursor")[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
};

export { updateQuery };