function PageHandler(lastPage) {
    var currentPageNumber = 1;
    var firstPageNumber = 1;
    var lastPageNumber = lastPage;

    this.getCurrentPageNumber = function () {
        return currentPageNumber;
    };

    this.setPage = function (number) {
        if (number > lastPageNumber)
            number = firstPageNumber;
        if (number < firstPageNumber)
            number = lastPageNumber;

        $('#page-' + currentPageNumber).addClass('not-displayed');
        $('#page-' + number).removeClass('not-displayed');

        $('#dot' + currentPageNumber).removeClass('slick-active');
        $('#dot' + number).addClass('slick-active');

        currentPageNumber = number;
    }
}