import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  propertyType: text("property_type").notNull(),
  serviceType: text("service_type").notNull(),
  address: text("address").notNull(),
  preferredDate: text("preferred_date"),
  details: text("details"),
  consent: text("consent"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBookingSchema = createInsertSchema(bookings).pick({
  name: true,
  phone: true,
  email: true,
  propertyType: true,
  serviceType: true,
  address: true,
  preferredDate: true,
  details: true,
  consent: true,
}).extend({
  email: z.string().optional(),
  preferredDate: z.string().optional(),
  details: z.string().optional(),
  consent: z.string().optional()
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
