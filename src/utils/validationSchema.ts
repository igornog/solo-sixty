import { z } from 'zod';
import { LETTER_CHECK, NUMBER_CHECK } from './regex';

export const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({
      message: 'Must be a valid email',
    })
    .optional(),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' })
    .optional(),
});
export type ValidationSchemaType = z.infer<typeof validationSchema>;
export const validationSchemaNewPassword = z
  .object({
    newPassword: z
      .string()
      .min(1, { message: 'New password is required' })
      .regex(NUMBER_CHECK, {
        message: 'Password not strong enough',
      })
      .min(8, { message: 'Password not strong enough' }),
    confirmPassword: z.string().min(1, {
      message: 'New password confirmation is required',
    }),
  })
  .refine((data) => LETTER_CHECK.test(data.newPassword.charAt(0)), {
    path: ['newPassword'],
    message: 'Password not strong enough',
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
export type validationSchemaNewPasswordType = z.infer<
  typeof validationSchemaNewPassword
>;
