import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        userId: z.string().transform((val) => Number(val)),
      }),
    )
    // eslint-disable-next-line arrow-body-style
    .query(() => {
      return {
        name: 'User',
      };
    }),
});
