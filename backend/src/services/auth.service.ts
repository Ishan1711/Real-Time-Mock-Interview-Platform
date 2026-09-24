import bcrypt from "bcryptjs";
import { Temporal } from "@js-temporal/polyfill";
import db from "../config/db.js";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterData) => {
  const existingUser = await db.orm.public.User.first({
    email,
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await db.orm.public.User.create({
    name,
    email,
    passwordHash,
    updatedAt: Temporal.Now.instant(),
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};