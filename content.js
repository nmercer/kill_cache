var callback = function () {
  $('div.popup').replaceWith('<center><div class="popup">Cache Killed</div></center>');
  //setTimeout(function() {window.close()}, 5000);
};

chrome.experimental.clear.browsingData(0, {
  "cache": true
}, callback);

