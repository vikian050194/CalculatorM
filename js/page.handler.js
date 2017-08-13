function PageHandler() {
	var currentPageNumber = 1;
	var firstPageNumber = 1;
	var lastPageNumber = 2;
	
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
			$('#left-arrow').attr('disabled', true);
		}
		if(number === lastPageNumber) {
			$('#right-arrow').attr('disabled', true);
		}
		if(number >= firstPageNumber) {
			$('#left-arrow').removeAttr('disabled');
		}
		if(number <= lastPageNumber) {
			$('#right-arrow').removeAttr('disabled');
		}
		
		currentPageNumber = number;
	}
	
	this.setPage(firstPageNumber);
}