import zod from "zod";

export const registerSchema = zod.object({
  username: zod
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),

  email: zod.string().email("Invalid email address"),
  phone: zod.string().min(10, "Phone number must be at least 10 digits long"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
});

export const loginSchema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
});
