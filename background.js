let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.identity.getAuthToken({ interactive: true }, function(token) {
    console.log('got the token', token);
})