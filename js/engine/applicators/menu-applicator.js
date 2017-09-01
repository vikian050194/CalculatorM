function applyMenu(themer) {
    $('#nextTheme').on('click', function () {
        themer.next();
    });

    $("#positive").change(function () {
        if (this.checked) {
            Cookies.set('positive', true, {expires: 31});
        } else {
            Cookies.set('positive', false, {expires: 31});
        }
    });
}