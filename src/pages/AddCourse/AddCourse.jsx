import React, { useState, useEffect, useContext } from "react";
import { Section, Button, Notification, InputField } from "../../components";
import * as S from "./AddCourse.style";
import { AuthContext } from "../../contexts/AuthContext";

function addCourseData(data, auth, setError, setType, error) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/courses`, {
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
        setError(data.msg);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function AddCourse() {
  const auth = useContext(AuthContext);
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
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-lecturers`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
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
  }, [auth.token]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-groups`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
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
  }, [auth.token]);

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Add Course</h2>
      <S.FormBox>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            addCourseData(data, auth, setError, setType);
          }}
        >
          <S.InputWrapper>
            <InputField
              labelText="Course Name:"
              type="text"
              placeholder="course name"
              IconClassName="fas fa-book-open"
              handleChange={(e) =>
                setData({
                  ...data,
                  courseName: e.target.value.split(" ").join(""),
                })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Description:"
              type="text"
              placeholder="course description"
              IconClassName="fas fa-info"
              handleChange={(e) =>
                setData({
                  ...data,
                  description: e.target.value.split(" ").join(""),
                })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Lecturer:"
              type="dropdown"
              options={lecturer}
              handleChange={(e) =>
                setData({ ...data, lecturerId: e.target.value })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Group:"
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
