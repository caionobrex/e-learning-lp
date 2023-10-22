'use client'

import { useSignInCardController } from './useSignInCardController'

export function SignInCard() {
  const {
    errors,
    isSubmitting,
    register,
    handleOnChangePhoneNumber,
    handleOnSubmit,
    handleCreateAccount,
  } = useSignInCardController()

  return (
    <div className="shadow-md rounded-lg px-6 py-8 bg-white w-full sm:w-96">
      <h1 className="text-3xl mb-5 font-medium text-gray-800">Nova Conta</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div>
            <input
              type="text"
              id="name"
              className="border w-full rounded-md px-2 py-3 outline-none"
              placeholder="(DDD) 9 9999-9999"
              maxLength={16}
              {...register('phoneNumber', {
                onChange: handleOnChangePhoneNumber,
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mt-2">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Nome Completo
          </label>
          <div>
            <input
              type="text"
              id="name"
              className="border w-full rounded-md px-2 py-3 outline-none"
              placeholder="(DDD) 9 9999-9999"
              maxLength={16}
              {...register('phoneNumber', {
                onChange: handleOnChangePhoneNumber,
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mt-2">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Senha
          </label>
          <div>
            <input
              type="password"
              id="name"
              className="border w-full rounded-md px-2 py-3 outline-none"
              placeholder="(DDD) 9 9999-9999"
              maxLength={16}
              {...register('phoneNumber', {
                onChange: handleOnChangePhoneNumber,
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mt-2">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="py-3 px-10 rounded-br-2xl rounded-tl-2xl w-full bg-primary-400 text-white transition-all"
          // className={`mt-6 ${
          //   errors.phoneNumber && 'opacity-50'
          // } bg-primary-400 w-full rounded-md py-2 font-medium text-white disabled:bg-opacity-60`}
          disabled={!!errors.phoneNumber || isSubmitting}
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
