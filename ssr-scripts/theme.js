  (function() {
    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.className = 'dark';
      } else if (theme === 'light') {
        document.documentElement.className = 'light';
      }
      else {
        document.documentElement.className = '';
      }
      window.__theme = theme;
    };

    window.__setPreferredTheme = function(theme) {
      setTheme(theme);
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
    };

    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (e) {}
    setTheme(preferredTheme);
    // var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();