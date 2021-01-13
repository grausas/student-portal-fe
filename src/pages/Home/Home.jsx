import React from "react";
import { Section, Card } from "../../components";
import * as S from "./Home.style";
import { homeData } from "../../utils/HomeData";

function Home() {
  return (
    <>
      <Section>
        <h1>Welcome to student's portal</h1>
        <S.FlexDiv>
          <Card data={homeData} />
        </S.FlexDiv>
      </Section>
    </>
  );
}

export default Home;
