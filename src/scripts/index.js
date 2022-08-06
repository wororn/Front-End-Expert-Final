import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/jumbotron.css';
import '../styles/responsive.css';
import '../styles/responsive-image.css';
import '../styles/loader.css';
import '../styles/lazyload.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),

});

const lazySizesConfig = async () => {
  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.constrainPixelDensity = true;
  window.lazySizesConfig.getOptimumX = function (_element) {
    return window.devicePixelRatio > 1.6 ? devicePixelRatio * 0.9 : 1;
  };
  // use .lazy instead of .lazyload
  window.lazySizesConfig.lazyClass = 'lazy';
  // use data-original instead of data-src
  window.lazySizesConfig.srcAttr = 'data-original';
  // page is optimized for fast onload event
  window.lazySizesConfig.loadMode = 1;
  window.lazySizesConfig.expand = 5;
  window.lazySizesConfig.preloadAfterLoad = true;
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  lazySizesConfig();
  app.renderPage();
  swRegister();
});

console.log('Hello World');
