$(document).ready(function(){

	$('link[title=dark]').remove();
	$('head').append( '<link rel="stylesheet" href="chrome-extension://__MSG_@@extension_id__/app-dark.css" title="dark">' );
});