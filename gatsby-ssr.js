'use strict';

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
    (function() {
    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.className = 'dark';
      } else if (theme === 'light') {
        document.documentElement.className = 'light';
      } else if (theme === 'book') {
        document.documentElement.className = 'book';
      } else if (window.navigator.maxTouchPoints < 1) {
        document.documentElement.className = '';
      } else {
        document.documentElement.className = 'light';
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
  })();
  `
          .replace(/\n/g, ' ')
          .replace(/ {2}/g, ''),
      }}
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function() {
    let isMobile = false;
    if(window.navigator.maxTouchPoints > 1)
    {
        isMobile = true;
    }
    window.__isMobile = isMobile;
  })();
  `
          .replace(/\n/g, ' ')
          .replace(/ {2}/g, ''),
      }}
    />,
  ]);
};