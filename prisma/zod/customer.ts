import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  mail: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCustomer extends z.infer<typeof customerSchema> {
  user: CompleteUser
}

/**
 * relatedCustomerSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCustomerSchema: z.ZodSchema<CompleteCustomer> = z.lazy(() => customerSchema.extend({
  user: relatedUserSchema,
}))
