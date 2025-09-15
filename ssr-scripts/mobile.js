  (function() {
    let isMobile = false;
    if(window.navigator.maxTouchPoints > 1)
    {
        isMobile = true;
    }
    window.__isMobile = isMobile;
  })();