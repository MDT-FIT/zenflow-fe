import { Input } from '../../../components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Field, FieldError } from '@/components/ui/field'
import { LogInFormValues, schema } from '@/features/auth/models/LogInFormValues'

export interface LogInFormProps {
  id: string
  defaultValues?: LogInFormValues
  onSubmit: (data: LogInFormValues) => void
}
export const LogInForm = ({ id, defaultValues, onSubmit }: LogInFormProps) => {
  const form = useForm<LogInFormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues ?? LogInFormValues.create(),
    mode: 'onChange',
  })

  const { control, handleSubmit } = form



  return (
    <form id={id} onSubmit={handleSubmit((data) => onSubmit(data))} className="w-full">
      <div className="w-full space-y-2">
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
