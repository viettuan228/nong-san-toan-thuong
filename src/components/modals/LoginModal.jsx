import React from 'react'
import LoginForm from '../forms/LoginForm'
import BaseModal from './BaseModal'

function LoginModal(props) {
    const { isOpenModal, closeModal } = props

    return (
        <BaseModal status={isOpenModal} closeModal={closeModal}>
            <div className="loginForm p-2">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <div className="mt- 4">
                    <LoginForm />
                </div>
            </div>
        </BaseModal>
    )
}

export default LoginModal
