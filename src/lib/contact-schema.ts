import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
