import React, { useEffect, useState } from "react";
import { Section, Table, InputField } from "../../components/index";
import { tableCourse } from "../../utils/TableData";
import * as S from "./Courses.style";

function Students() {
  const [courses, setCourses] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(Number(event.target.value));
  };

  const results = !searchTerm
    ? courses
    : courses.filter((course) => course.id === searchTerm);

  useEffect(() => {
    fetch("http://localhost:8080/view-courses")
      .then((res) => res.json())
      .then((data) =>
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
        )
      );
  }, []);
  return (
    <Section>
      <h2>Courses</h2>
      <S.InputWrapper>
        <InputField
          type="dropdown"
          labelText="Filter Course:"
          value={searchTerm}
          options={courses}
          handleChange={handleSearch}
        />
      </S.InputWrapper>
      <Table cols={tableCourse} data={results} tableTitle="Courses" />
    </Section>
  );
}

export default Students;
