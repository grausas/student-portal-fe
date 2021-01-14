import React, { useState, useEffect, useContext } from "react";
import { Section, Card } from "../../components";
import * as S from "./Home.style";
import { AuthContext } from "../../contexts/AuthContext";
import students from "../../assets/students.png";
import teacher from "../../assets/teacher.png";
import graduate from "../../assets/graduate.png";

function Home() {
  const auth = useContext(AuthContext);
  const [counts, setCounts] = useState({
    studentsCount: "",
    lecturersCount: "",
    coursesCount: "",
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/counts`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.map((item) =>
          setCounts({
            studentsCount: item.studentsCount,
            lecturersCount: item.lecturersCount,
            coursesCount: item.coursesCount,
          })
        )
      );
  }, [auth.token]);

  const homeData = [
    {
      name: "Students",
      image: students,
      info: counts.studentsCount,
    },
    {
      name: "Lecturers",
      image: teacher,
      info: counts.lecturersCount,
    },
    {
      name: "Courses",
      image: graduate,
      info: counts.coursesCount,
    },
  ];

  return (
    <>
      <Section>
        <h1>Welcome to student's portal</h1>
        <S.FlexDiv>
          {homeData && (
            <Card
              data={homeData}
              // info={counts && counts.map((item) => item.studentsCount)}
            />
          )}

          {/* {console.log(counts.studentsCount)} */}
        </S.FlexDiv>
      </Section>
    </>
  );
}

export default Home;
