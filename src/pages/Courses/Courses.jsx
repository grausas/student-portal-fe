import React, { useEffect, useState } from "react";
import { Section, Table } from "../../components/index";
import { tableCourse } from "../../utils/TableData";

function Students() {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-courses")
      .then((res) => res.json())
      .then((data) =>
        setCourses(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
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
      <Table cols={tableCourse} data={courses} tableTitle="Courses" />
    </Section>
  );
}

export default Students;
