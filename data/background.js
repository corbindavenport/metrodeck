chrome.runtime.onInstalled.addListener(function(details) {
	if(details.reason == "update" || "install") {
		localStorage["extensionid"] = chrome.extension.getURL('/');
	}
	if(localStorage.getItem("version") != chrome.runtime.getManifest().version) {
		// update message here
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.method == "getLocalStorage")
	  sendResponse({data: localStorage[request.key]});
	else
	  sendResponse({}); // snub them.
});