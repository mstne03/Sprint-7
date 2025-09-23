import RegisterForm from '@/components/RegisterForm/RegisterForm'

const RegisterPage = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-white font-medium text-5xl my-10">
                Register account
            </h1>
            <RegisterForm />
        </main>
    )
}

export default RegisterPage
