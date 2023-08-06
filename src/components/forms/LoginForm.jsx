import React from 'react'
import { useForm } from 'react-hook-form'
const inputsLoginForm = [
    {
        id: 'userName',
        type: 'text',
        text: 'Username or email address ',
        name: 'userName',
        required: true,
        validations: {},
    },
    {
        id: 'password',
        name: 'password',
        type: 'password',
        text: 'Password ',
        required: true,
        validations: {},
    },
]
function LoginForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('data', data)
    }
    const renderInput = inputsLoginForm.map((item) => (
        <div key={item.id} className="inputForm mt-4">
            <label className="block mb-2" htmlFor={item.name}>
                {item.text}
                {item.required && <span className="text-red">*</span>}
            </label>
            <input
                id={item.id}
                type={item.type}
                {...register(item.name)}
                className="border text-lime border-gray2 rounded block min-w-[440px] p-2 focus-visible:outline-none hover:border-gray focus:border-gray transition"
            />
        </div>
    ))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderInput}
            <div className="inputForm mt-4">
                <input
                    type="checkbox"
                    {...register('rememberMe')}
                    className=""
                />{' '}
                <label className="ml-2" htmlFor="rememberMe">
                    Remember me
                </label>
            </div>

            <button
                type="submit"
                className="w-full h-[45px] bg-lime rounded text-white hover:bg-limeHover transition font-bold mt-4"
            >
                Sign in
            </button>
        </form>
    )
}

export default LoginForm
