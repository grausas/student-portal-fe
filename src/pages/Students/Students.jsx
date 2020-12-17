import React, { useEffect, useState } from "react";
import { Section, Table } from "../../components/index";
import { tableStudents } from "../../utils/TableData";

function Students() {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <Section>
      <h2>Students</h2>
      <Table cols={tableStudents} data={students} tableTitle="Students" />
    </Section>
  );
}

export default Students;
