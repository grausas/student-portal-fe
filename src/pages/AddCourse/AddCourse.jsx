import React, { useState, useEffect } from "react";
import { Section, Button, Notification, InputField } from "../../components";
import * as S from "./AddCourse.style";
// import { addCourse } from "../../utils/FormData";

function addCourseData(data, setError, setType, error) {
  console.log(data);
  fetch("http://localhost:8080/courses", {
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

function AddCourse() {
  const [error, setError] = useState();
  const [type, setType] = useState();
  const [data, setData] = useState({
    courseName: "",
    description: "",
    lecturerId: "",
    groupId: "",
  });

  const [lecturer, setLecturer] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/view-lecturers")
      .then((res) => res.json())
      .then((data) =>
        setLecturer(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
              text: item.name + " " + item.surname,
              name: item.name,
              surname: item.surname,
            };
          })
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/view-groups")
      .then((res) => res.json())
      .then((data) =>
        setGroups(
          data.map((item) => {
            return {
              id: item.id,
              value: item.groupId,
              text: item.groupId,
            };
          })
        )
      );
  }, []);

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Add Course</h2>
      <S.FormBox>
        <S.FormTitle>Add Course</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            addCourseData(data, setError, setType);
          }}
        >
          <S.InputWrapper>
            <InputField
              labelText="Name"
              type="text"
              placeholder="course name"
              handleChange={(e) =>
                setData({ ...data, courseName: e.target.value })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Description"
              type="text"
              placeholder="course description"
              handleChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Lecturer"
              type="dropdown"
              options={lecturer}
              handleChange={(e) =>
                setData({ ...data, lecturerId: e.target.value })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Group"
              type="dropdown"
              options={groups}
              handleChange={(e) =>
                setData({ ...data, groupId: e.target.value })
              }
            />
          </S.InputWrapper>
          <Button>Add Course</Button>
        </S.Form>
      </S.FormBox>
    </Section>
  );
}

export default AddCourse;
