import React, { useEffect, useState, useContext } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./EditStudent.style";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function editStudentData(data, auth) {
  const id = data.id;
  fetch(`${process.env.REACT_APP_SERVER_URL}/editstudent/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(data),
  });
}

function EditStudent() {
  const auth = useContext(AuthContext);
  const location = useLocation();

  const [data, setData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const studentData = location.state.detail;
    setData({
      id: studentData.id,
      name: studentData.fullname.split(" ")[0],
      surname: studentData.fullname.split(" ")[1],
      email: studentData.email,
      phone: studentData.phone.slice(1),
    });
  }, [location]);

  return (
    <Section>
      <h2>Edit Student</h2>
      <S.FormWrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editStudentData(data, auth);
          }}
        >
          <InputField
            defaultValue={data.name}
            labelText="Name:"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value.split(" ").join(""),
              })
            }
          />
          <InputField
            defaultValue={data.surname}
            labelText="Surname:"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                surname: e.target.value.split(" ").join(""),
              })
            }
          />
          <InputField
            defaultValue={data.email}
            type="email"
            labelText="Email:"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value.split(" ").join(""),
              })
            }
          />
          <InputField
            defaultValue={data.phone}
            labelText="Phone:"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                phone: e.target.value.split(" ").join(""),
              })
            }
          />
          <Button>Edit Student</Button>
        </form>
      </S.FormWrapper>
    </Section>
  );
}

export default EditStudent;
