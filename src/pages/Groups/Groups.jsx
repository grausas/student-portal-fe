import React, { useEffect, useState, useContext } from "react";
import { Section, Table, Form, Notification } from "../../components/index";
import * as S from "./Groups.style";
import { AuthContext } from "../../contexts/AuthContext";
import { tableGroup } from "../../utils/TableData";
import { addGroup } from "../../utils/FormData";

function addGroupData(data, auth, setError, setType, error) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
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
function Students() {
  const auth = useContext(AuthContext);
  const [groups, setGroups] = useState();
  const [error, setError] = useState();
  const [type, setType] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-groups`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGroups(data);
      });
  }, [auth.token]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view-students`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
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
  }, [auth.token]);

  return (
    <>
      <Section>
        {error && <Notification type={type}>{error}</Notification>}
        <h2>Add Group</h2>
        <S.FormWrapper>
          <Form
            callback={(fieldValues) => {
              addGroupData(fieldValues, auth, setError, setType);
            }}
            options={students}
            fields={addGroup}
            titleText="Add Group"
            buttonText="Add Group"
          />
        </S.FormWrapper>
        <h2>Groups</h2>
        <Table cols={tableGroup} data={groups} />
      </Section>
    </>
  );
}

export default Students;
