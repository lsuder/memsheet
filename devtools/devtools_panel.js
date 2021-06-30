const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

let analyzeSheetBt = document.getElementById("analyzeSheet");
let sheetId;
analyzeSheetBt.addEventListener("click", onAnalyzeSheetClick);

async function onAnalyzeSheetClick() {
    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);
        readMetaForRow(3);
    });
}

function onGAPILoad() {
    console.log("on Gapi Loaded");

    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);

        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            const sheetIdRegex = "/spreadsheets/d/([a-zA-Z0-9-_]+)";
            if (!tabs) {
                console.log("not loaded yet.");
                return;
            }
            const matchResult = tabs[0].url.match(sheetIdRegex);

            if (matchResult.length == 2) {
                sheetId = matchResult[1];

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

function readMetaForRow(row) {
    var request = gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "F" + row
    });
    request.then(function(response) {
        console.log(response.result);
        let sm2Meta = JSON.parse(response.result.values[0][0]);
        console.log(SM2.calculate(sm2Meta, 3));
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}