function PageHandler() {
	var currentPageNumber = 1;
	var firstPageNumber = 1;
	var lastPageNumber = 2;
	var self = this;
	
	this.getCurrentPageNumber = function() {
		return currentPageNumber;
	}
	
	this.setPage = function(number) {
		$('.page-' + currentPageNumber).each(function() {
			$(this).addClass('not-displayed');
		});
		
		$('.page-' + number).each(function() {
			$(this).removeClass('not-displayed');
		});
		
		$('#dot' + currentPageNumber).removeClass('dot_chosen');
		$('#dot' + number).addClass('dot_chosen');
		
		if(number === firstPageNumber) {
			$('#left-arrow').off('click');
		}
		if(number === lastPageNumber) {
			$('#right-arrow').off('click');
		}
		if(number > firstPageNumber) {
            $('#left-arrow').on('click', function() {
                self.setPage(number - 1);
            });
		}
		if(number < lastPageNumber) {
            $('#right-arrow').on('click', function() {
                self.setPage(number + 1);
            });
		}

		currentPageNumber = number;
	}
}