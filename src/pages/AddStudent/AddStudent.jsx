import React, { useState } from "react";
import { Section, Form, Notification } from "../../components";
import * as S from "./AddStudent.style";
import { addStudent } from "../../utils/FormData";

function addStudentData(data, setError, setType, error) {
  fetch("http://localhost:8080/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
        setError(data.msg);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function AddStudent() {
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <Section>
      <h2>Add Student</h2>
      <S.FormWrapper>
        <Form
          callback={(fieldValues) =>
            addStudentData(fieldValues, setError, setType)
          }
          fields={addStudent}
          titleText="Add Student"
          buttonText="Add Student"
        />
      </S.FormWrapper>
      {error && <Notification type={type}>{error}</Notification>}
    </Section>
  );
}

export default AddStudent;
