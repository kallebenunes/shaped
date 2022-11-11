import React from 'react'
import Container from './style'
import logo from './../../assets/logo.png'

const Header = () => {
    return (
        <Container>
            <img src={logo} alt="Logo Shaped" />
        </Container>
    )
}
export default Header