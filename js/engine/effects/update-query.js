const updateQuery = (state) => {
    $("#query").html(state.query.items.map(i => `<span>${i}</span>`).join("<span>&nbsp;</span>") + "<span class=\"blinking-cursor\">|</span>");
    document.getElementsByClassName("blinking-cursor")[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

export { updateQuery };