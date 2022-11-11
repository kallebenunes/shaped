import React, {
  ChangeEvent,
  useContext,
  useState,
} from "react";
import { GlobalContext } from "../../contexts/globalContext";
import Container from "./style";
import banner from './../../assets/banner-home.png'


const Login = () => {
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLogged, setIsLoginPage } = useContext(GlobalContext);

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleUser(event: ChangeEvent<HTMLInputElement>) {
    setuser(event.target.value);
  }

  function handleLogin(event: React.MouseEvent) {
    event.preventDefault();
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
        <form>
          <h1>Cadastro</h1>
          <label>
            <input onChange={handleUser} type="text" placeholder="Usuário" />
          </label>
          <label>
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Senha"
            />
          </label>
          <span>Esqueceu sua senha ?</span>
          <button onClick={handleLogin} type="submit">
            Logar
          </button>
          <button onClick={handleRegister}>Cadastre-se</button>
        </form>
      </div>
    </Container>
  );
};
export default Login;
