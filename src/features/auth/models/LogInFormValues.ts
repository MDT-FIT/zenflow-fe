import z from 'zod/v3'

export interface LogInFormValues {
  email: string
  password: string
}

export const LogInFormValues = {
  create,
}

export function create(init?: LogInFormValues): LogInFormValues {
  return {
    ...init,
    email: init?.email ?? '',
    password: init?.password ?? '',
  }
}

export const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must include at least one number and one special character'
    ),
})
