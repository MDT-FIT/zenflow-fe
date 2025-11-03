import { Input } from '../../../components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, SignUpFormValues } from '@/features/auth/models/SignUpFormValues'
import { Field, FieldError } from '@/components/ui/field'

export interface SignInFormProps {
  id: string
  defaultValues?: SignUpFormValues
  onSubmit?: (data: SignUpFormValues) => void
}
export const SignInForm = ({ id, defaultValues, onSubmit }: SignInFormProps) => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues ?? SignUpFormValues.create(),
    mode: 'onChange',
  })

  const { control, handleSubmit } = form

  const handler = handleSubmit((data: SignUpFormValues) => onSubmit?.(data))

  return (
    <form id={id} onSubmit={handler} className="w-full">
      <div className="w-full space-y-2">
        <Controller
          control={control}
          name="username"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                name="username"
                placeholder="Username"
                id="username"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                name="email"
                placeholder="Email"
                id="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                name="password"
                placeholder="Password"
                id="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </form>
  )
}
