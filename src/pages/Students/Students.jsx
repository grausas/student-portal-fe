import React, { useEffect, useState } from "react";
import { Section, Table, InputField } from "../../components/index";
import { tableStudents } from "../../utils/TableData";
import * as S from "./Students.style";

function Students() {
  const [students, setStudents] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? students
    : students.filter(
        (person) =>
          person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          person.surname.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

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
      .then((data) =>
        setStudents(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
              text: item.name,
              name: item.name,
              surname: item.surname,
              email: item.email,
            };
          })
        )
      );
  }, []);

  return (
    <Section>
      <h2>Students</h2>
      <S.InputWrapper>
        <InputField
          type="text"
          labelText="Search Student:"
          placeholder="search..."
          value={searchTerm}
          handleChange={handleSearch}
        />
      </S.InputWrapper>
      <Table
        cols={tableStudents(handleDelete)}
        data={results}
        tableTitle="Students"
      />
    </Section>
  );
}

export default Students;
