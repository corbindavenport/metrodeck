var pageMod = require("sdk/page-mod");
var self = require("sdk/self");


pageMod.PageMod({
  	include: "https://tweetdeck.twitter.com/*",
  	contentScriptWhen: 'ready',
  	contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("contentscript.js")],
    contentScriptOptions: {"extensionid" : self.data.url('')}
});