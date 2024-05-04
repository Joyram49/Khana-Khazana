import { z } from "zod";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,20}$/;

const User = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" }),

  lastName: z
    .string()
    .trim()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Must be 100 or fewer characters long" }),
  password: z.string().regex(passwordRegex, {
    message:
      " Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 6-20 characters long.",
  }),
});

export { User };
