const waitMs = 5000;

function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/.+?\.zoom\.us\/.+?success.*/)) {
    console.debug(`Detected #success, closing tab in ${waitMs} ms`);
    setTimeout(() => {
      console.debug(`Closed tab ID ${tabId}`);
      chrome.tabs.remove(tabId, _ => chrome.runtime.lastError);
    }, waitMs)
  }
}

console.debug("Enabled zoom tab listener");
chrome.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);
