import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './local.db',
  },
  tablesFilter: ['ftApp__*'],
} satisfies Config;
