import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// gets all the users from the db
export const getAllUsers = () => {
  return prisma.users.findMany({
    select: {
      name: true,
      last_name: true,
      city: true,
      user_role: true
    }
  });
}


// get a single user by the id 

export const getUserById = (id: string) => {
  return prisma.users.findUnique({
    where: {
      user_id:id
    }
  });
}

export const createUser = (input: any) => {
  const dateOfBirth = new Date(input.date_of_birth);
  return prisma.users.create({
    data: {
      email: input.email,
      password: input.password,
      name: input.name,
      last_name: input.last_name,
      document_type: input.document_type,
      document_number: input.document_number,
      date_of_birth: dateOfBirth,
      city: input.city,
      contact_email: Boolean(input.contact_email),
      contact_sms: Boolean(input.contact_sms),
      contact_wpp: Boolean(input.contact_wpp),
      user_role: input.user_role
    }
  });
}

// update user
export const updateUser = (id: string, input: any) => {

  const { email, password, name, last_name, city, contact_email, contact_sms, contact_wpp } = input;

  return prisma.users.update({
    where: {
      user_id: id
    },
    data: {
      email: email && { set: email },
      password: password && { set: password },
      name: name && { set: name },
      last_name: last_name && { set: last_name },
      city: city && { set: city },
      contact_email: contact_email && { set: Boolean(contact_email) },
      contact_sms: contact_sms && { set: Boolean(contact_sms) },
      contact_wpp: contact_wpp && { set: Boolean(contact_wpp) },
    }
  });
}

// delete user 

export const deleteUser = (id: string) => {
  return prisma.users.delete({
    where: {
      user_id: id
    }
  });
}