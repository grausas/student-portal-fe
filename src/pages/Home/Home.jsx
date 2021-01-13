import React from "react";
import { Section, Card } from "../../components";
import * as S from "./Home.style";
import students from "../../assets/students.png";
import teacher from "../../assets/teacher.png";
import graduate from "../../assets/graduate.png";

function Home() {
  const homeData = [
    {
      name: "Students",
      image: students,
      info: "23",
    },
    {
      name: "Teachers",
      image: teacher,
      info: "5",
    },
    {
      name: "Graduates",
      image: graduate,
      info: "20",
    },
  ];

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
