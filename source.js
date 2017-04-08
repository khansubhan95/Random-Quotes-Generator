$(document).ready(function(){
	var quote='';
	$.getJSON('https://salt-horse.glitch.me/api/quotes',function(data){
		$('#quote').html(data.quoteText);
		quote=data.quoteText;
	});

	$('#new-quote').click(function(){
		$.getJSON('https://salt-horse.glitch.me/api/quotes',function(data){
		$('#quote').html(data.quoteText);
		quote=data.quoteText;
	});
	});

	$('#tweet').click(function(){
		window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quote));
	});
});