'use client'

import { useSignInCardController } from './useSignInCardController'

export function SignInCard() {
  const {
    errors,
    isSubmitting,
    register,
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
            Email
          </label>
          <div>
            <input
              type="text"
              id="name"
              className="border w-full rounded-md px-2 py-3 outline-none"
              placeholder="Digite seu email"
              {...register('username')}
            />
            {errors.username && (
              <p className="text-red-500 mt-2">{errors.username.message}</p>
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
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
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
        <button
          type="submit"
          className={`mt-6 ${
            errors.username && 'opacity-50'
          } bg-primary w-full rounded-md py-2 font-medium text-white disabled:bg-opacity-60`}
          // disabled={!!errors || isSubmitting}
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
