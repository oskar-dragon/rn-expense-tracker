import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { expensesRouter } from './routes/expenses';
import { helloRouter } from './routes/hello';
import { createTRPCRouter } from './trpc';

const appRouter = createTRPCRouter({
  hello: helloRouter,
  expenses: expensesRouter,
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);
