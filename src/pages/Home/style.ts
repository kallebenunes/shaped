import styled from "styled-components";

const Container = styled.main`
  div {
    height: calc(100vh - 99px);
    display: flex;

    aside {
      width: 170px;
    }

    section {
      background: #e4ebee;
      padding: 2rem;
      width: 100%;

      div {
        background: #ffffff;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 303px;
        }
      }
    }
  }
`;

export default Container;
