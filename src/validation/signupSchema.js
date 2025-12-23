import { z } from 'zod';

export const signupSchema = z
  .object({
    firstname: z.string().min(2, 'First name must be atleast 2 character'),
    lastname: z.string().min(2, 'Last name must be atleast 2 character'),
    email: z.string().email('Please enter a valid email'),
    password: z
      .string()
      .min(8, 'Password must be atleast 8 character')
      .regex(/[A-Z]/, 'Password must contain atleast one uppercase letter')
      .regex(/[0-9]/, 'Password must contain atleast one number'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });
