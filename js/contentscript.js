/*
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
*/

var extensionid;
var metroalert = 0;

chrome.runtime.sendMessage({method: "getLocalStorage", key: "extensionid"}, function(response) {
	extensionid = response.data;
});

function metroAlert(message) {
	metroalert++;
	$('body').append('<div class="metroalert" id="metroalert' + metroalert + '">' + message + '</div>');
	setTimeout(function() {
		$('#metroalert' + metroalert).fadeOut('slow');
	}, 10000);
}

$(document).ready(function(){
	console.log("[MetroDeck] Starting MetroDeck " + chrome.runtime.getManifest().version + ".");
	console.log("[MetroDeck] Extension ID is reported as " + extensionid);

	// Change title and icon
	document.title = 'MetroDeck';
	$('link[rel="shortcut icon"]').remove();
	$('head').append( '<link rel="shortcut icon" href="' + extensionid + 'img/icon32.png">' );
	console.log("[MetroDeck] Changed page title and icon.");

	// Apply custom CSS stylesheets
	if ($('link[title=light]').length) {
		$('link[title=light]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-light.css" title="light">' );
		console.log("[MetroDeck] Light theme stylesheet found, replaced with MetroDeck light stylesheet.");
	} else {
		console.log("[MetroDeck] Could not find light theme stylesheet, attempting to skip.");
	}

	if ($('link[title=dark]').length) {
		$('link[title=dark]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-dark.css" title="dark">' );
		console.log("[MetroDeck] Dark theme stylesheet found, replaced with MetroDeck dark stylesheet.");
	} else {
		console.log("[MetroDeck] Could not find dark theme stylesheet, attempting to skip.");
	}

	// Disable animations
	$.fx.off = true;

});

$(window).load(function(){
	
});