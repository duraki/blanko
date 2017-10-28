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
    newtab = tab;
  });
