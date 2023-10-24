import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ISignInForm } from './types'
import { revalidatePath } from 'next/cache'
// import { AuthService } from '@/services/auth'
// import { schema } from './schema'
// import { yupResolver } from '@hookform/resolvers/yup'

export const useSignInCardController = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInForm>({
    // resolver: yupResolver(schema),
  })

  const handleOnSubmit = handleSubmit(async (values: ISignInForm) => {
    const res = await signIn('credentials', { redirect: false, ...values })
    if (res?.ok) {
      router.refresh()
    }
  })

  const handleCreateAccount = () => router.push('/signup')

  return {
    errors,
    isSubmitting,
    register,
    handleOnSubmit,
    handleCreateAccount,
  }
}
