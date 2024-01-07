import { sqliteTableCreator } from 'drizzle-orm/sqlite-core';

export const ftTable = sqliteTableCreator((name) => `ftApp_${name}`);
