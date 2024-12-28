
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/task-manager-angular-v3/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/task-manager-angular-v3"
  }
],
  assets: {
    'index.csr.html': {size: 561, hash: 'a1cc87a14a7c5c7c131d621e164e7345f294644c80b7e239fc600d4ba4ece1fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'd3e20db5cd587b2896745a52b7318da88034eb9f30b88c176715d9e2e6b651b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20903, hash: 'd2608f9e43846ad9a53fbb4529ebc7b098266e64e7e74fe2d18459debaa34a87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
