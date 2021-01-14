import React, { useState, useEffect, useContext } from "react";
import { Section, Card } from "../../components";
import * as S from "./Home.style";
// import { homeData } from "../../utils/HomeData";
import { AuthContext } from "../../contexts/AuthContext";
import students from "../../assets/students.png";
import teacher from "../../assets/teacher.png";
import graduate from "../../assets/graduate.png";

function Home() {
  const auth = useContext(AuthContext);
  const [counts, setCounts] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/counts`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCounts(data.map((item) => item.studentsCount)));
  }, [auth.token]);

  const homeData = [
    {
      name: "Students",
      image: students,
      info: counts,
    },
    {
      name: "Lecturers",
      image: teacher,
    },
    {
      name: "Graduates",
      image: graduate,
    },
  ];

  return (
    <>
      <Section>
        <h1>Welcome to student's portal</h1>
        <S.FlexDiv>
          <Card
            data={homeData}
            // info={counts && counts.map((item) => item.studentsCount)}
          />
          {console.log(homeData)}
        </S.FlexDiv>
      </Section>
    </>
  );
}

export default Home;
