import { registerApplication, start } from 'single-spa';

registerApplication(
    'home',
    () => import('./src/home/home.app.js'),
    (loc) => loc.pathname === '' || loc.pathname === '/' || loc.pathname.startsWith('/home')
);

registerApplication(
  'navBar',
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true,
);

registerApplication(
  'angularJS',
  () => import('./src/angularJS/angularJS.app.js'),
  (loc) => loc.pathname.startsWith('/angularJS')
);

start();