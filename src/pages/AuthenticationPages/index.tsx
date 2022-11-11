import React, { useState } from 'react'
import Login from '../../components/Login'
import Register from '../../components/Register'
import Container from './style'
const AuthenticationPage = () => {
    const [IsLoginPage, setIsLoginPage] = useState(true)
    return (
        <Container>
            {
                IsLoginPage 
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