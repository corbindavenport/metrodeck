var extensionid;

chrome.runtime.sendMessage({method: "getLocalStorage", key: "extensionid"}, function(response) {
	extensionid = response.data;
});

$(document).ready(function(){
	console.log("Starting MetroDeck " + chrome.runtime.getManifest().version + ".");
	console.log("MetroDeck extension ID is reported as " + extensionid);

	// Change title and icon
	document.title = 'MetroDeck';
	$('link[rel="shortcut icon"]').remove();
	$('head').append( '<link rel="shortcut icon" href="' + extensionid + 'img/icon32.png">' );

	// Apply custom CSS stylesheets

	$('link[title=dark]').remove();
	$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-dark.css" title="dark">' );
	$('link[title=light]').remove();
	$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-light.css" title="light">' );

	// Disable animations

	$.fx.off = true;
});

$(document).ajaxStop(function () {
	console.log("MetroDeck " + chrome.runtime.getManifest().version + " loaded.");
});