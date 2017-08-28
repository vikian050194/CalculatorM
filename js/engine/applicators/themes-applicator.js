function applyThemes(themer) {
    $('[data-value="nextTheme"]').on('click', function () {
        themer.next();
    })
}