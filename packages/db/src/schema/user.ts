import { sql } from 'drizzle-orm';
import { integer, text } from 'drizzle-orm/sqlite-core';

import { ftTable } from '../table';

export const users = ftTable('user', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});
