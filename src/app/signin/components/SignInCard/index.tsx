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
      <h1 className="text-3xl mb-5 font-medium text-gray-800">Entrar</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Telefone
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
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-2 text-blue-500"
              onClick={handleCreateAccount}
            >
              Criar uma conta
            </button>
          </div>
        </div>
        <p className="text-sm text-primary">
          Você não receberá o código de acesso se você não possuir uma conta.
        </p>
        <button
          type="submit"
          className={`mt-6 ${
            errors.phoneNumber && 'opacity-50'
          } bg-primary w-full rounded-md py-2 font-medium text-white disabled:bg-opacity-60`}
          disabled={!!errors.phoneNumber || isSubmitting}
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
