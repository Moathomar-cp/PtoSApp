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
    apiKey: 'AIzaSyCzy5B2_jDI7IuYEtrMH00_zkKFoDTu2-k',
    authDomain: 'ptos-e178e.firebaseapp.com',
    databaseURL: 'https://ptos-e178e.firebaseio.com/',
    projectId: 'ptos-e178e',
    storageBucket: 'ptos-e178e.appspot.com',
    messagingSenderId: '714481396961'
  }
};
