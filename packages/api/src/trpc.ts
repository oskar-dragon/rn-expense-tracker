import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();

export const createTRPCRouter = trpc.router;
export const publicProcedure = trpc.procedure;
