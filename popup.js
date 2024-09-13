
const switcher = document.getElementById("checker");
if ('status' in localStorage) {
  let statusWork = localStorage.getItem('status');
  if (statusWork == 'on') {
    chrome.action.setBadgeText({ text: 'on' });
    switcher.checked = true;
    sendStatus('on');
  } else {
    chrome.action.setBadgeText({ text: 'off' });
    switcher.checked = false;
    sendStatus('off');

  }
}

switcher.addEventListener('change', function () {
  if (this.checked) {
    localStorage.setItem('status', 'on');
    chrome.action.setBadgeText({ text: 'on' });
    sendStatus('on');
  } else {
    localStorage.setItem('status', 'off');
    chrome.action.setBadgeText({ text: 'off' });
    sendStatus('off');

  }
})

function sendStatus(sst) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        'type': 'sworked',
        'stWork': sst
      }
    );
  });
}
