import React, { useEffect, useState, useContext } from "react";
import { Section, Table, InputField } from "../../components/index";
import { tableCourse } from "../../utils/TableData";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./Courses.style";

function Courses() {
  const auth = useContext(AuthContext);
  const [courses, setCourses] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(Number(event.target.value));
  };

  const results = !searchTerm
    ? courses
    : courses.filter((course) => course.id === searchTerm);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-courses`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
              text: item.course_name,
              name: item.course_name,
              description: item.description,
              lecturer: item.lecturer,
              group: item.students,
            };
          })
        );
      });
  }, [auth.token]);
  return (
    <Section>
      <S.InputWrapper>
        <InputField
          type="dropdown"
          labelText="Filter Course:"
          value={searchTerm}
          options={courses}
          handleChange={handleSearch}
        />
      </S.InputWrapper>
      <h2>Courses</h2>
      <Table cols={tableCourse} data={results} />
    </Section>
  );
}

export default Courses;
