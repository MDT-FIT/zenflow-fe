import z from 'zod/v3'

export interface SignUpFormValues {
  username: string
  email: string
  password: string
}

export const SignUpFormValues = {
  create,
}

export function create(init?: SignUpFormValues): SignUpFormValues {
  return {
    ...init,
    username: init?.username ?? '',
    email: init?.email ?? '',
    password: init?.password ?? '',
  }
}

export const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must include at least one number and one special character'
    ),
})
