import { z } from 'zod';

const AdminSignUpSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name must be 50 characters or less." })
    .regex(/^[^\d]/, { message: "Name should not start with a number." })
    .regex(/^[a-zA-Z\s.'-]+$/, {
      message: "Name can only contain letters, spaces, periods, apostrophes, or hyphens.",
    }),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Enter a valid email address." })
    .max(100, { message: "Email must be 100 characters or less." }),
  password: z
    .string({ required_error: "Password is required." })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password must be 100 characters or less." })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/\d/, { message: "Password must contain at least one number." })
    .regex(/[\W_]/, { message: "Password must contain at least one special character." })
})

type AdminSignupSchemaType = z.infer<typeof AdminSignUpSchema>

const AdminLoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Enter a valid email address." })
    .max(100, { message: "Email must be 100 characters or less." }),
  password: z
    .string({ required_error: "Password is required." })
    .trim()
  // .min(8, { message: "Password must be at least 8 characters long." })
  // .max(100, { message: "Password must be 100 characters or less." })
  // .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  // .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  // .regex(/\d/, { message: "Password must contain at least one number." })
  // .regex(/[\W_]/, { message: "Password must contain at least one special character." })
})

type AdminLoginSchemaType = z.infer<typeof AdminLoginSchema>



export { AdminSignUpSchema, type AdminSignupSchemaType, AdminLoginSchema, type AdminLoginSchemaType };