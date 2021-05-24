const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

let analyzeSheetBt = document.getElementById("analyzeSheet");
analyzeSheetBt.addEventListener("click", onAnalyzeSheetClick);

async function onAnalyzeSheetClick() {
    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);
    });
}

function onGAPILoad() {
    console.log("on Gapi Loaded");

    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);

        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            const sheetIdRegex = "/spreadsheets/d/([a-zA-Z0-9-_]+)";
            const matchResult = tabs[0].url.match(sheetIdRegex);

            if (matchResult.length == 2) {
                const sheetId = matchResult[1];

                console.log('got the token', token);
                gapi.client.init({
                    discoveryDocs: DISCOVERY_DOCS,
                }).then(function() {
                    gapi.auth.setToken({
                        'access_token': token,
                    });

                    gapi.client.sheets.spreadsheets.get({
                        spreadsheetId: sheetId
                    }).then(function(response) {
                        console.log(response);
                    });
                });
            }
        });


    });
}