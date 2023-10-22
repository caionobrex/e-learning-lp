'use client'

// import { formatToPhone } from 'brazilian-values'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ISignInForm } from './types'
// import { AuthService } from '@/services/auth'
// import { schema } from './schema'
// import { yupResolver } from '@hookform/resolvers/yup'

export const useSignInCardController = () => {
  const router = useRouter()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInForm>({
    // resolver: yupResolver(schema),
  })

  const handleOnChangePhoneNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // setValue('phoneNumber', formatToPhone(e.currentTarget.value))
  }

  const handleOnSubmit = handleSubmit(async (values: ISignInForm) => {
    try {
      // await AuthService.sendAccessCode(values.phoneNumber)
    } catch {
    } finally {
      localStorage.setItem('phoneNumber', values.phoneNumber)
      router.push('/confirm-access-code')
    }
  })

  const handleCreateAccount = () => router.push('/signup')

  useEffect(() => {
    localStorage.removeItem('phoneNumber')
  }, [])

  return {
    errors,
    isSubmitting,
    register,
    handleOnChangePhoneNumber,
    handleOnSubmit,
    handleCreateAccount,
  }
}
