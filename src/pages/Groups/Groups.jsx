import React, { useEffect, useState } from "react";
import {
  Section,
  Table,
  InputField,
  Form,
  Notification,
} from "../../components/index";
import * as S from "./Groups.style";
import { tableGroup } from "../../utils/TableData";
import { addGroup } from "../../utils/FormData";

function addGroupData(data, setError, setType, setGroups, groups, error) {
  fetch("http://localhost:8080/groups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
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

        console.log("hello");
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}
function Students() {
  const [groups, setGroups] = useState();
  const [error, setError] = useState();
  const [type, setType] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/view-groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(
          data.map((item) => {
            return {
              id: item.id,
              value: item.id,
              text: item.groupId,
              groupid: item.groupId,
              student: item.student,
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/view-students")
      .then((res) => res.json())
      .then((data) =>
        setStudents(
          data.map((item) => {
            return {
              id: item.id,
              text: item.name + " " + item.surname,
              value: item.id,
            };
          })
        )
      );
  }, []);

  return (
    <>
      <Section>
        {error && <Notification type={type}>{error}</Notification>}
        <h2>Add Group</h2>
        <S.FormWrapper>
          <Form
            callback={(fieldValues) => {
              addGroupData(fieldValues, setError, setType);
            }}
            options={students}
            fields={addGroup}
            titleText="Add Group"
            buttonText="Add Group"
          />
        </S.FormWrapper>
        <h2>Groups</h2>
        <Table cols={tableGroup} data={groups} tableTitle="Groups" />
      </Section>
    </>
  );
}

export default Students;
