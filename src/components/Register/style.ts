import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;

  aside {
    width: 50%;
  }

  > div {
    width: 50%;
    background: #E4EBEE;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 55%;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  gap: .5rem;
  margin: .7rem 0;

  label {
    width: 100%;
    input {
      width: 100%;
      display: block;
      padding: .7rem 1rem;
      border-radius: 6px;
      border: 1px solid #788089;
    }
  }
`;

export default Container;
