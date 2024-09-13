var flagstatus = false;

if ('stat' in localStorage) {
  if (localStorage.getItem('stat') == 'on') {
    flagstatus = true;
  }
  else {
    flagstatus = false;
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'sworked') {
    let working_work = request.stWork;
    window.localStorage.setItem("stat", working_work);
  }
});


const ex_h = screen.height;
const ex_w = screen.width;

function getSelectedText() {
  return window.getSelection().toString();
}

document.addEventListener("dblclick", function () {
  if ('stat' in localStorage) {
    if (localStorage.getItem('stat') == 'on') {
      flagstatus = true;
    }
    else {
      flagstatus = false;
    }
  }
  let selectedText = getSelectedText();
  if (selectedText && flagstatus) {
    try {
      chrome.runtime.sendMessage(
        {
          "type": "scanit",
          "ii": selectedText,
          "h": ex_h,
          "w": ex_w
        }
      );
    }
    catch (e) {
      console.log(e.stack);
    }

  }
});


