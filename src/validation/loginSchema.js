import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please ebter a valid email'),
  password: z.string().min(1, 'Password is required'),
});
