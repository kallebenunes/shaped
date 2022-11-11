import React, {
  ChangeEvent,
  useContext,
  useState,
} from "react";
import { GlobalContext } from "../../contexts/globalContext";
import Container from "./style";
import banner from './../../assets/banner-home.png'
import { useForm } from 'react-hook-form';


const Login = () => {

  const { setIsLogged, setIsLoginPage } = useContext(GlobalContext);

  const {register, handleSubmit} = useForm()

  
  function handleLogin(data: any) {
    console.log(data)
    setIsLogged(true);
  }

  function handleRegister(event: React.MouseEvent) {
    event.preventDefault();
    setIsLoginPage(false);
  }

  return (
    <Container>
      <aside>
        <div>
          <img src={banner} alt="Banner" />
          <p>
            Utilizamos a inteligêncial artificial para fazer a avaliação
            corporal por meio de fotos.
          </p>
        </div>
      </aside>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Cadastro</h1>
          <label>
            <input required type="text" placeholder="Usuário" {...register("usernmae")} />
          </label>
          <label>
            <input
              required
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </label>
          <span>Esqueceu sua senha ?</span>
          <button type="submit">
            Logar
          </button>
          <button onClick={handleRegister}>Cadastre-se</button>
        </form>
      </div>
    </Container>
  );
};
export default Login;
