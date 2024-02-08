import { db } from "@/lib/db/index";
import { getUserAuth } from "@/lib/auth/utils";
import { type CustomerId, customerIdSchema } from "@/lib/db/schema/customers";

export const getCustomers = async () => {
  const { session } = await getUserAuth();
  const c = await db.customer.findMany({ where: {userId: session?.user.id!}});
  return { customers: c };
};

export const getCustomerById = async (id: CustomerId) => {
  const { session } = await getUserAuth();
  const { id: customerId } = customerIdSchema.parse({ id });
  const c = await db.customer.findFirst({
    where: { id: customerId, userId: session?.user.id!}});
  return { customer: c };
};


