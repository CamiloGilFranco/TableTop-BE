import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

interface PhoneNumber {
  id_user_phone_number: string;
  phone_number: string;
}

interface UserAddress {
  id_address: string;
  address_name: string;
  address: string;
  city: string;
}

const prisma = new PrismaClient();

// gets all the users from the db
export const getAllUsers = () => {
  return prisma.users.findMany({
    select: {
      name: true,
      last_name: true,
      city: true,
      user_role: true,
    },
  });
};

// get a single user by the id
export const getUserById = (id: string) => {
  return prisma.users.findUnique({
    where: {
      user_id: id,
    },
    include: {
      phone_numbers: true,
      addresses: true,
      reservations: true,
      orders: true,
      reviews: true,
      restaurants: true,
    },
  });
};

export const createUser = async (input: any) => {
  const {
    email,
    password,
    name,
    last_name,
    document_type,
    document_number,
    date_of_birth,
    city,
    contact_email,
    contact_sms,
    contact_wpp,
    user_role,
    address,
    phone_number,
  } = input;
  const dateOfBirth = new Date(date_of_birth);
  try {
    return prisma.users.create({
      data: {
        email,
        password,
        name,
        last_name,
        document_type,
        document_number,
        date_of_birth: dateOfBirth,
        city,
        contact_email: Boolean(contact_email),
        contact_sms: Boolean(contact_sms),
        contact_wpp: Boolean(contact_wpp),
        user_role,
        phone_numbers: {
          create: {
            phone_number,
          },
        },
        addresses: {
          create: {
            address_name: "Primary Address",
            address,
            city,
          },
        },
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Email already exists");
    } else {
      throw error;
    }
  }
};

// update user
export const updateUser = async (id: string | undefined, input: any) => {
  const {
    email,
    name,
    last_name,
    city,
    contact_email,
    contact_sms,
    contact_wpp,
    phone_numbers,
    addresses,
  } = input;

  const encPassword = await bcrypt.hash(input.password, 10);
  // Update the phone numbers
  const updatedPhoneNumbers = phone_numbers
    ? phone_numbers.map(
        ({ id_user_phone_number, phone_number }: PhoneNumber) => ({
          where: { id_user_phone_number },
          data: { phone_number },
        })
      )
    : [];

  // Update the addresses
  const updatedAddresses = addresses
    ? addresses.map(
        ({ id_address, address_name, address, city }: UserAddress) => ({
          where: { id_address },
          data: { address_name, address, city },
        })
      )
    : [];
  return prisma.users.update({
    where: {
      user_id: id,
    },
    data: {
      email: email && { set: email },
      password: encPassword && { set: encPassword },
      name: name && { set: name },
      last_name: last_name && { set: last_name },
      city: city && { set: city },
      contact_email: contact_email && { set: Boolean(contact_email) },
      contact_sms: contact_sms && { set: Boolean(contact_sms) },
      contact_wpp: contact_wpp && { set: Boolean(contact_wpp) },
      phone_numbers: phone_numbers && { updateMany: updatedPhoneNumbers },
      addresses: addresses && { updateMany: updatedAddresses },
    },
  });
};

// delete user
export const deleteUser = (id: string) => {
  return prisma.users.delete({
    where: {
      user_id: id,
    },
  });
};
