import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { helloRouter } from './routes/hello';
import { createTRPCRouter } from './trpc';

const appRouter = createTRPCRouter({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);
