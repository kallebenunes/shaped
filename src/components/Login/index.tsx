import React from 'react'
import Container from './style'
const Login = () => {
    return (
        <Container>
            <div>
                Aside Content
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder='Usuário' />
                    </label>
                    <label>
                        <input type="text" placeholder='Senha' />
                    </label>
                </form>
            </div>
        </Container>
    )
}
export default Login