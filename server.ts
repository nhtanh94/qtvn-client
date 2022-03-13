import '@ng-web-apis/universal/mocks';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { provideLocation, provideUserAgent } from '@ng-web-apis/universal';

const fakeStorage: Storage = {
  length: 0,
  clear: () => {},
  getItem: (_key: string) => null,
  key: (_index: number) => null,
  removeItem: (_key: string) => {},
  setItem: (_key: string, _data: string) => {},
};

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  const domino = require('domino');
  const win = domino.createWindow(indexHtml.toString());
  win.Object = Object;
  global['Event'];
  global['window'] = win;
  Object.defineProperty(win.document.body.style, 'transform', {
    value: () => {
      return {
        enumerable: true,
        configurable: true,
      };
    },
  });
  global['document'] = win.document;
  (global as any)['navigator'] = win.navigator;
  (global as any)['location'] = win.location;
  (global as any)['localStorage'] = fakeStorage;
  (global as any)['sessionStorage'] = fakeStorage;
  global['CSS'];
  (global as any)['Prism'];
  (global as any)['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;

  (global as any)['requestAnimationFrame'] = (callback: any, element: any) => {
    let lastTime = 0;
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  global['cancelAnimationFrame'] = (id) => {
    clearTimeout(id);
  };

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('/api/*', (req, res) => {
    res.status(404).send('data requests are not supported');
  });

  server.get('/admin/api/*', (req, res) => {
    res.status(404).send('data requests are not supported');
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  // When you use plain SSR without prerender you can retrieve some of the information from requests.
  // Use the following helpers to harvest that info:
  server.get('/**/*', (req, res) => {
    res.render('../dist/index', {
      req,
      res,
      providers: [provideLocation(req), provideUserAgent(req)],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4200;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    // console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
