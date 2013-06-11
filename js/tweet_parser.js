$(document).ready(function() {
	$("#parse_button").click(function() {
		var tweets_html = document.getElementById("html_to_parse").value;
		document.getElementById("parsed_tweets_area").innerHTML = tweets_html;
	});
});