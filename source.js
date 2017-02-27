$(document).ready(function(){
	var quote='';
	$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',function(data){
		$('#quote').html(data.quoteText);
		quote=data.quoteText;
	});

	$('#new-quote').click(function(){
		$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',function(data){
		$('#quote').html(data.quoteText);
		quote=data.quoteText;
	});
	});

	$('#tweet').click(function(){
		window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quote));
	});
});