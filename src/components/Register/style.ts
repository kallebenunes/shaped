import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;

  aside {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    div {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        max-width: 70%;
        text-align: center;
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1.4rem;
      }
    }
  }

  > div {
    width: 50%;
    background: #e4ebee;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 55%;

      button {
        width: 100%;
        display: block;
        padding: 0.8rem;
        font-weight: 700;
        border-radius: 6px;

        &:first-of-type {
          background: #3e7d89;
          border: none;
          border-radius: 6px;
          color: #ffffff;
          margin-top: 1.2rem;
          margin-bottom: 1rem;
        }

        &:last-of-type {
          border: 1px solid #3e7d89;
          color: #3e7d89;
          background: #ffffff;
        }
      }
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.7rem 0;

  label {
    width: 100%;
    input,
    select {
      width: 100%;
      display: block;
      padding: 0.7rem 1rem;
      border-radius: 6px;
      border: 1px solid #788089;
    }
  }
`;

export default Container;
