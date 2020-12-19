import React, { useEffect, useState } from "react";
import { Section, Table } from "../../components/index";
import { tableStudents } from "../../utils/TableData";

function Students() {
  const [students, setStudents] = useState();

  const handleDelete = (item) => () => {
    const itemId = item.id;
    window.confirm("Do you want to delete this item?") &&
      fetch(`http://localhost:8080/delete/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => {
        if (!response.ok) {
          throw response;
        } else {
          setStudents(students.filter((item) => itemId !== item.id));
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:8080/view-students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Section>
      <h2>Students</h2>
      <Table
        cols={tableStudents(handleDelete)}
        data={students}
        tableTitle="Students"
      />
    </Section>
  );
}

export default Students;
