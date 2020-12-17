import React from "react";
import { Section, Form } from "../../components";
import * as S from "./AddStudent.style";
import { addStudent } from "../../utils/FormData";

function addStudentData(data) {
  fetch("http://localhost:8080/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function AddStudent() {
  return (
    <Section>
      <h2>Add Student</h2>
      <S.FormWrapper>
        <Form
          callback={(fieldValues) => addStudentData(fieldValues)}
          fields={addStudent}
          titleText="Add Student"
          buttonText="Add Student"
        />
      </S.FormWrapper>
    </Section>
  );
}

export default AddStudent;
