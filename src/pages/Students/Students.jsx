import React, { useEffect, useState, useContext } from "react";
import { Section, Table, InputField } from "../../components/index";
import { tableStudents } from "../../utils/TableData";
import * as S from "./Students.style";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Students() {
  const auth = useContext(AuthContext);
  const [students, setStudents] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    const sortIndex = event.target.id;

    const sortedData = students.slice().sort((a, b) => {
      if (sortIndex === "0") {
        return a.fullname.localeCompare(b.fullname);
      }
      return 0;
    });
    setStudents(sortedData);
  };

  const results = !searchTerm
    ? students
    : students.filter((person) =>
        person.fullname.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const handleDelete = (item) => () => {
    const itemId = item.id;
    const studentName = item.fullname;
    window.confirm(`Do you want to delete student: ${studentName}`) &&
      fetch(`${process.env.REACT_APP_SERVER_URL}/delete/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      }).then((response) => {
        if (!response.ok) {
          throw response;
        } else {
          setStudents(students.filter((item) => itemId !== item.id));
        }
      });
  };

  const handleEdit = (item) => () => {
    const studentName = item.fullname;
    window.confirm(`Do you want to edit student: ${studentName}`) &&
      history.push({
        pathname: `/editstudent/${item.id}`,
        state: { detail: item },
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-students`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudents(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
              text: item.name,
              fullname: item.name + " " + item.surname,
              email: item.email,
              phone: "+" + item.phone,
              studing: item.course_name,
            };
          })
        );
      });
  }, [auth.token]);

  return (
    <Section>
      <S.InputWrapper>
        <InputField
          type="text"
          labelText="Search Student:"
          placeholder="Search..."
          value={searchTerm}
          handleChange={handleSearch}
          IconClassName="fas fa-search"
        />
      </S.InputWrapper>
      <h2>Students</h2>
      <Table
        handleClick={handleSort}
        cols={tableStudents(handleDelete, handleEdit)}
        data={results}
      />
    </Section>
  );
}

export default Students;
