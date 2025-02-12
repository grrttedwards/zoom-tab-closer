const waitMs = 5000;
const alarmPrefix = "close-tab-z-";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url?.match(/https:\/\/(?:.+\.)*?zoom\.us\/.+?success.*/)) {
    console.debug(`Detected #success, closing tab in ${waitMs} ms`);
    chrome.alarms.create(`${alarmPrefix}${tabId}`, { when: Date.now() + waitMs });
  }
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name.startsWith(alarmPrefix)) {
    const tabId = parseInt(alarm.name.replace(alarmPrefix, ""));
    chrome.tabs.remove(tabId, () => chrome.runtime.lastError);
    console.debug(`Closed tab ID ${tabId}`);
  }
});

console.debug("Enabled zoom tab listener");
