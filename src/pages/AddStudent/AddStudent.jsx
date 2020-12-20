import React, { useState, useContext } from "react";
import { Section, Form, Notification } from "../../components";
import * as S from "./AddStudent.style";
import { addStudent } from "../../utils/FormData";
import { AuthContext } from "../../contexts/AuthContext";

function addStudentData(data, auth, setError, setType, error) {
  const studentName = data.name + " " + data.surname;
  fetch("http://localhost:8080/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
      } else {
        error = false;
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setType("error");
        setError(data.msg);
      } else {
        setType("");
        setError(`Student ${studentName} was successfully added`);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function AddStudent() {
  const auth = useContext(AuthContext);
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Add Student</h2>
      <S.FormWrapper>
        <Form
          callback={(fieldValues) =>
            addStudentData(fieldValues, auth, setError, setType)
          }
          fields={addStudent}
          titleText="Add Student"
          buttonText="Add Student"
        />
      </S.FormWrapper>
    </Section>
  );
}

export default AddStudent;
