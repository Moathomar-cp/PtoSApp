// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCA55anhCXl6YRYu4-LQZvZ2cOPloHTFxI",
    authDomain: "testdb-74c48.firebaseapp.com",
    databaseURL: "https://testdb-74c48.firebaseio.com",
    projectId: "testdb-74c48",
    storageBucket: "",
    messagingSenderId: "284470912203"
  },
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
