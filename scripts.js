(function() {
  'use strict';

  var triggerEn = document.getElementById('toEn');
  var triggerFr = document.getElementById('toFr');
  var contentEn = document.querySelectorAll('.en');
  var contentFr = document.querySelectorAll('.fr');

  function getDisplay(node) {
    return node && node.nodeName.toLowerCase() === 'div' ? 'block': 'inline-block';
  }

  function showEn() {
    for (var i=0; i<contentEn.length; i++) {
      contentEn[i].style.display = getDisplay(contentEn[i]);
    }
    for (i=0; i<contentFr.length; i++) {
      contentFr[i].style.display = 'none';
    }
  }

  function showFr() {
    for (var i=0; i<contentEn.length; i++) {
      contentEn[i].style.display = 'none';
    }
    for (i=0; i<contentFr.length; i++) {
      contentFr[i].style.display = getDisplay(contentEn[i]);
    }
  }

  showFr();
  triggerEn.addEventListener('click', showEn);
  triggerFr.addEventListener('click', showFr);
})();