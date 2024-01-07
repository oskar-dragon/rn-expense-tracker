import { sql } from 'drizzle-orm';
import { text } from 'drizzle-orm/sqlite-core';

import { ftTable } from './table';

export const users = ftTable('user', {
  id: text('id')
    .primaryKey()
    .default(sql`CURRENT_TIMESTAMP`),
  name: text('name').notNull(),
});
