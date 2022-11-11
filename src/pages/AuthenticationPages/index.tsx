import React, { useContext, useState } from 'react'
import Login from '../../components/Login'
import Register from '../../components/Register'
import Container from './style'
import { GlobalContext } from './../../contexts/globalContext';
const AuthenticationPage = () => {
    const { isLoginPage } = useContext(GlobalContext)
    return (
        <Container>
            {
                isLoginPage
                ? (
                    <Login/>
                )
                : (
                    <Register/>
                )
            }
        </Container>
    )
}
export default AuthenticationPage