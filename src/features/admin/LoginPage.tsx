import { Link } from '@tanstack/react-router'

import img from '@/assets/images/admin-auth-bg.webp'
import imgMobile from '@/assets/images/mobile-admin-auth-bg.webp'
import imgTablet from '@/assets/images/tablet-admin-auth-bg.webp'
import LoadingScreen from '@/components/LoadingScreen'
import useTokenVerify from '@/hooks/useTokenVerify'

import LoginForm from './LoginForm'

function LoginPage() {
  const { isLoading } = useTokenVerify('dashboard')

  if (isLoading) return <LoadingScreen />

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" overflow-clip lg:h-screen lg:block ">
          <picture>
            <source media="(max-width:639px)" srcSet={imgMobile} />
            <source media="(max-width:1023px)" srcSet={imgTablet} />
            <img
              src={img}
              alt="decorative-image"
              height={1042}
              width={748}
              className="w-full h-auto lg:h-full lg:w-full lg: object-cover"
            />
          </picture>
        </div>
        <div className="flex items-center justify-center px-6 py-12 lg:p-6">
          <div className="w-3/4 flex flex-col gap-14">
            <h1 className=" font-extrabold text-4xl">Welcome back!</h1>
            <LoginForm />
            <p className="text-center">
              Don’t have an account?{' '}
              <Link
                to={'/admin/signup'}
                className=" text-blue-200 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
