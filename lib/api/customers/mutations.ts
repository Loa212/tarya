import { db } from "@/lib/db/index";
import { 
  CustomerId, 
  NewCustomerParams,
  UpdateCustomerParams, 
  updateCustomerSchema,
  insertCustomerSchema, 
  customerIdSchema 
} from "@/lib/db/schema/customers";
import { getUserAuth } from "@/lib/auth/utils";

export const createCustomer = async (customer: NewCustomerParams) => {
  const { session } = await getUserAuth();
  const newCustomer = insertCustomerSchema.parse({ ...customer, userId: session?.user.id! });
  try {
    const c = await db.customer.create({ data: newCustomer });
    return { customer: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateCustomer = async (id: CustomerId, customer: UpdateCustomerParams) => {
  const { session } = await getUserAuth();
  const { id: customerId } = customerIdSchema.parse({ id });
  const newCustomer = updateCustomerSchema.parse({ ...customer, userId: session?.user.id! });
  try {
    const c = await db.customer.update({ where: { id: customerId, userId: session?.user.id! }, data: newCustomer})
    return { customer: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteCustomer = async (id: CustomerId) => {
  const { session } = await getUserAuth();
  const { id: customerId } = customerIdSchema.parse({ id });
  try {
    const c = await db.customer.delete({ where: { id: customerId, userId: session?.user.id! }})
    return { customer: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

