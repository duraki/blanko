// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var newtab = null;
document.title = ""

// add message listener
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

// chrome tabs new listener
chrome.tabs.onCreated.addListener(
  function(tab) {
    console.log('Welcome master.');
    newtab = tab;
  });
