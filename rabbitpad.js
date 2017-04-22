(function () {
  'use strict';

  var velocity = 0, bucket = 0,
    letters = 0,
    MEASURE_INTERVAL = 1000,
    CALCULATE_INTERVAL = 2000,
    textareas = document.getElementsByTagName('textarea'),
    lps = document.getElementsByClassName('lps'),
    lpsPlural = document.getElementsByClassName('lps-plural');

  if (textareas.length > 0) {
    textareas[0].focus();
  }

  for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener('keypress', function (e) {
      if (!e.ctrlKey && e.keyCode != 8 && e.keyCode != 46 && !(e.keyCode >= 33 && e.keyCode <= 36)) {
        letters++;
      }
    }, false);
  }

  setInterval(function () {
    bucket += letters;
    letters = 0;
  }, MEASURE_INTERVAL);

  setInterval(function () {
    velocity = bucket / 2;
    bucket = 0;

    for (var i = 0; i < lps.length; i++) {
      lps[i].textContent = String(velocity);
    }

    var plural = 's';
    if (velocity > 0 && velocity <= 1) {
      plural = '';
    }

    for (var i = 0; i < lpsPlural.length; i++) {
      lpsPlural[i].textContent = plural;
    }
  }, CALCULATE_INTERVAL);
})();
