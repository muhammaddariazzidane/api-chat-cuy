import { ChatRouter } from './chat.route.js';
import { AuthRouter } from './auth.route.js';

const _routes = [
  ['/chat', ChatRouter],
  ['/auth', AuthRouter],
];

export const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
