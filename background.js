// background.js
// This event listener runs when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// This event listener runs when a message is received from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received from content script:", message);
  // You can perform actions based on the received message
});
