import React, { useEffect, useState } from "react";
import { Section, Table } from "../../components/index";
import { tableCourse } from "../../utils/TableData";

function Students() {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Section>
      <h2>Students</h2>
      <Table cols={tableCourse} data={courses} tableTitle="Courses" />
    </Section>
  );
}

export default Students;
