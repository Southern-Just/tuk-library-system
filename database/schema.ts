import {date, integer,uuid, pgEnum, pgTable, text, varchar, timestamp} from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', ["PENDING", "APPROVED", "REJECTED"]);

export const ROLE_ENUM = pgEnum('userRole', ["USER", "ADMIN"])

export const users = pgTable('users', {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar('full_name', {length:255}).notNull(),
    email:text('email').notNull().unique(),
    schoolId: integer('school_id').notNull().unique(),
    status:STATUS_ENUM("status").default("PENDING"),
    userRole:ROLE_ENUM("userRole").default("USER"),
    lastActivityDate: date('last_date_activity').defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});
