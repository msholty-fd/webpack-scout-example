let scoutString = window.location.search
  .substring(1)
  .split('&')
  .find(string => string.includes('scout='));
let scoutValue;

if (scoutString) {
  scoutValue = scoutString.split('=').pop();
}

if (scoutValue === 'dev') {
  __webpack_public_path__ = '//localhost:2020/';
} else if (scoutValue) {
  __webpack_public_path__ = `/${scout}/`;
}

import(
  /* webpackChunkName: "app" */
  './app/index.jsx',
);
