chrome.runtime.onMessage.addListener(function (request) {

    if (request.type === 'scanit') {
        const sc = request.ii;
        const ex_height = request.h;
        const ex_weight = request.w;
        chrome.tabs.create({
            url: chrome.runtime.getURL('barcode.html?ii=' + request.ii),
            active: false
        }, function (tab) {
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                width: 300,
                height: 300,
                left: Math.round((Number(ex_weight) - 300) / 2),
                top: Math.round((Number(ex_height) - 300) / 2)

            });
        });
    }
});
