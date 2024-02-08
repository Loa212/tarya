import { customerSchema } from "@/zodAutoGenSchemas";
import { z } from "zod";
import { timestamps } from "@/lib/utils";
import { getCustomers } from "@/lib/api/customers/queries";


// Schema for customers - used to validate API requests
const baseSchema = customerSchema.omit(timestamps)

export const insertCustomerSchema = baseSchema.omit({ id: true });
export const insertCustomerParams = baseSchema.extend({}).omit({ 
  id: true,
  userId: true
});

export const updateCustomerSchema = baseSchema;
export const updateCustomerParams = updateCustomerSchema.extend({}).omit({ 
  userId: true
});
export const customerIdSchema = baseSchema.pick({ id: true });

// Types for customers - used to type API request params and within Components
export type Customer = z.infer<typeof customerSchema>;
export type NewCustomer = z.infer<typeof insertCustomerSchema>;
export type NewCustomerParams = z.infer<typeof insertCustomerParams>;
export type UpdateCustomerParams = z.infer<typeof updateCustomerParams>;
export type CustomerId = z.infer<typeof customerIdSchema>["id"];
    
// this type infers the return from getCustomers() - meaning it will include any joins
export type CompleteCustomer = Awaited<ReturnType<typeof getCustomers>>["customers"][number];

