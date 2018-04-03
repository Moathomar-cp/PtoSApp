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
    apiKey: 'AIzaSyBpWwnrCwVnfbb50fCMRu531KUzppEoa1k ',
    authDomain: 'angularfirebase2-fa131.firebaseapp.com ',
    databaseURL: 'https://angularfirebase2-fa131.firebaseio.com/',
    projectId: 'angularfirebase2-fa131',
    storageBucket: 'gs://angularfirebase2-fa131.appspot.com',
    messagingSenderId: '38010947027'
  }
};
