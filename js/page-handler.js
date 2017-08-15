function PageHandler() {
	var currentPageNumber = 1;
	var firstPageNumber = 1;
	var lastPageNumber = 2;
	var self = this;
	
	this.getCurrentPageNumber = function() {
		return currentPageNumber;
	}
	
	this.setPage = function(number) {
		if(number > lastPageNumber)
			number = firstPageNumber;
		if(number < firstPageNumber)
			number = lastPageNumber;

		$('.page-' + currentPageNumber).each(function() {
			$(this).addClass('not-displayed');
		});
		
		$('.page-' + number).each(function() {
			$(this).removeClass('not-displayed');
		});
		
		$('#dot' + currentPageNumber).removeClass('dot_chosen');
		$('#dot' + number).addClass('dot_chosen');

		currentPageNumber = number;
	}
}