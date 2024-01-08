import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { userRouter } from './routes/user';
import { createTRPCRouter } from './trpc';

const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);
