// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],

  firebase: {
    apiKey: "AIzaSyA5CLPvp0CMpNePd6OHmSpqUSMKErG9tiI",
    authDomain: "angularfb-ff0f6.firebaseapp.com",
    databaseURL: "https://angularfb-ff0f6.firebaseio.com",
    projectId: "angularfb-ff0f6",
    storageBucket: "angularfb-ff0f6.appspot.com",
    messagingSenderId: "704140842690"
  }  
};
