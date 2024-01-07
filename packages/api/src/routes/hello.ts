import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const helloRouter = createTRPCRouter({
  user: publicProcedure.query(async () => 'hello'),
});
