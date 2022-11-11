import React from "react";
import Container from "./style";
import Header from "./../../components/Header/index";
import seatedWoman from "../../assets/seated-women.svg";

const Home = () => {
  return (
    <Container>
      <Header />
      <div>
        <aside></aside>
        <section>
          <div>
            <img src={seatedWoman} alt="Seated woman" />
          </div>
        </section>
      </div>
    </Container>
  );
};
export default Home;
