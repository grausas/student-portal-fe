import React from "react";
import { Section } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <>
      <Section>
        <S.TextBlock>
          <h1>Welcome to students portal</h1>
          <span>Here you can....</span>
        </S.TextBlock>
      </Section>
    </>
  );
}

export default Home;
