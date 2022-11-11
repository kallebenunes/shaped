import styled from "styled-components";

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  div {
    width: 50%;
    background: #e4ebee;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      label {
        width: 100%;

        &:first-of-type {
          input {
            margin: 1rem 0;
          }
        }

        input {
          padding: 0.5rem 1rem;
          width: 100%;
          display: block;
          border: 1px solid #CECFD1;
          border-radius: 6px;
        }
      }

      span {
        color: #3E7D89;
        font-size: .8rem;
        margin-top: .4rem;
      }

      button {
        width: 100%;
        display: block;
        padding: .8rem;
        font-weight: 700;
        border-radius: 6px;

        &:first-of-type {
          background: #3E7D89;
          border: none;
          border-radius: 6px;
          color: #ffffff;
          margin: .6rem 0;
        }

        &:last-of-type {
          border: 1px solid #3E7D89;
          color: #3E7D89;
          background: #ffffff;
        }
      }
    }
  }

  aside {
    width: 50%;
  }
`;

export default Container;
