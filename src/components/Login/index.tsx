import React from 'react'
import Container from './style'
const Login = () => {
    return (
        <Container>
            <aside>
                Aside Content
            </aside>
            <div>
                <form>
                    <h1>Cadastro</h1>
                    <label>
                        <input type="text" placeholder='Usuário' />
                    </label>
                    <label>
                        <input type="password" placeholder='Senha' />
                    </label>
                    <span>Esqueceu sua senha ?</span>
                    <button type="submit">Logar</button>
                    <button>Cadastre-se</button>
                </form>
            </div>
        </Container>
    )
}
export default Login