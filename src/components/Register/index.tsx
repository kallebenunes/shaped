import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Container, { FormGroup } from "./style";
import { GlobalContext } from "./../../contexts/globalContext";
import banner from "./../../assets/banner-home.png";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { setIsLogged, setIsLoginPage } = useContext(GlobalContext);

  function submitForm(data: any) {
    console.log(data);

    setIsLogged(true);
  }

  function handleCancel(event: React.MouseEvent) {
    event.preventDefault();
    setIsLoginPage(true);
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
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Cadastro</h1>
          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Nome"
                {...register("name")}
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="CPF"
                {...register("idNumber")}
                required
              />
            </label>
            <label htmlFor="">
              <select {...register("occupation")}>
                <option value="Médico">Médico</option>
              </select>
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              <select placeholder="Conselho" {...register("concil")} required>
                <option value="CRN-1">CRN-1</option>
                <option value="CRN-2">CRN-2</option>
                <option value="CRN-3">CRN-3</option>
                <option value="CRN-4">CRN-4</option>
              </select>
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="N de Registro"
                {...register("registerNumber")}
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="CEP"
                {...register("postalCode")}
                required
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Estado"
                {...register("state")}
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Cidade"
                {...register("city")}
                required
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
                required
              />
            </label>
          </FormGroup>

          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Rua"
                {...register("street")}
                required
              />
            </label>
          </FormGroup>

          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Número"
                {...register("number")}
                required
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
                required
              />
            </label>
          </FormGroup>

          <FormGroup>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Senha"
                {...register("passwprd")}
                required
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Repetir senha"
                {...register("passwordConfirmation")}
                required
              />
            </label>
          </FormGroup>
          <button type="submit"> Cadastrar </button>
          <button type="button" onClick={handleCancel}>
            Cancelar{" "}
          </button>
        </form>
      </div>
    </Container>
  );
};
export default Register;
