import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const expensesRouter = createTRPCRouter({
  all: publicProcedure.query(async () => 'Expenses'),
});
