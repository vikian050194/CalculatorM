function PageHandler(lastPage) {
    var currentPageNumber = 1;
    var firstPageNumber = 1;
    var lastPageNumber = lastPage;

    this.getCurrentPageNumber = function () {
        return currentPageNumber;
    };

    this.setPage = function (number) {
        if (number > lastPageNumber) {
            number = firstPageNumber;
        }
        if (number < firstPageNumber) {
            number = lastPageNumber;
        }

        for(var i = 1; i <= lastPageNumber; i++) {
            if(i === number) {
                $('#page-' + i).removeClass('not-displayed');
            } else {
                $('#page-' + i).addClass('not-displayed');
            }
        }

        for(var i = 1; i <= lastPageNumber; i++) {
            if(i === number) {
                $('#dot' + i).addClass('slick-active');
            } else {
                $('#dot' + i).removeClass('slick-active');
            }
        }

        currentPageNumber = number;
    }
}