const updateQuery = (state) => {
    const cursor = "<span class=\"blinking-cursor\">|</span>";
    let content = state.query.items.map((i, index) => { let term = `<span>${i}</span>`; return state.query.index === index ? term + cursor : term; }).join("<span>&nbsp;</span>");
    content = content === "" ? cursor : content;
    $("#query").html(content);
    document.getElementsByClassName("blinking-cursor")[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

export { updateQuery };