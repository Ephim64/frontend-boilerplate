(function () {
  'use strict';
  const panels = document.querySelectorAll('div.panel');

  function handleClick(e) {
    this.classList.toggle('open');
  };

  function handleTransitionEnd(e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
  panels.forEach(p => p.addEventListener('click', handleClick));
  panels.forEach(p => p.addEventListener('transitionend', handleTransitionEnd));
})();