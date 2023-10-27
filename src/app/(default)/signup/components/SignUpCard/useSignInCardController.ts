// import { formatToPhone } from 'brazilian-values'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ISignUpForm } from './types'
// import { AuthService } from '@/services/auth'
// import { schema } from './schema'
// import { yupResolver } from '@hookform/resolvers/yup'

export const useSignInCardController = ({
  defaultValues,
}: {
  defaultValues?: Partial<ISignUpForm>
}) => {
  const router = useRouter()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpForm>({
    // resolver: yupResolver(schema),
    defaultValues,
  })

  const handleOnChangePhoneNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // setValue('phoneNumber', formatToPhone(e.currentTarget.value))
  }

  const handleOnSubmit = handleSubmit(async (values: ISignUpForm) => {
    try {
      // await AuthService.sendAccessCode(values.phoneNumber)
    } catch {
    } finally {
      router.push('/confirm-access-code')
    }
  })

  const handleCreateAccount = () => router.push('/signup')

  return {
    errors,
    isSubmitting,
    register,
    handleOnChangePhoneNumber,
    handleOnSubmit,
    handleCreateAccount,
  }
}
