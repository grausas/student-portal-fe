import React, { useEffect, useState, useContext } from "react";
import { Section, InputField, Button, Notification } from "../../components";
import * as S from "./EditStudent.style";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

function editStudentData(data, auth, setError, setType, error) {
  const id = data.id;
  const studentName = data.name + " " + data.surname;
  fetch(`${process.env.REACT_APP_SERVER_URL}/editstudent/${id}`, {
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
        setError(`Student ${studentName} was successfully edited`);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function EditStudent() {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState();
  const [type, setType] = useState();

  const [data, setData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (location.state !== undefined) {
      const studentData = location.state.detail;
      setData({
        id: studentData.id,
        name: studentData.fullname.split(" ")[0],
        surname: studentData.fullname.split(" ")[1],
        email: studentData.email,
        phone: studentData.phone.slice(1),
      });
    }
  }, [location]);

  return (
    <>
      {location.state !== undefined ? (
        <Section>
          {error && <Notification type={type}>{error}</Notification>}
          <h2>Edit Student</h2>
          <S.FormWrapper>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editStudentData(data, auth, setError, setType);
              }}
            >
              <S.InputWrapper>
                <InputField
                  defaultValue={data.name}
                  labelText="Name:"
                  type="text"
                  minLength="2"
                  maxLength="50"
                  IconClassName="fas fa-user"
                  handleChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value.split(" ").join(""),
                    })
                  }
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <InputField
                  defaultValue={data.surname}
                  labelText="Surname:"
                  type="text"
                  minLength="2"
                  maxLength="50"
                  IconClassName="fas fa-user"
                  handleChange={(e) =>
                    setData({
                      ...data,
                      surname: e.target.value.split(" ").join(""),
                    })
                  }
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <InputField
                  defaultValue={data.email}
                  type="email"
                  labelText="Email:"
                  minLength="6"
                  maxLength="256"
                  handleChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value.split(" ").join(""),
                    })
                  }
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <InputField
                  defaultValue={data.phone}
                  labelText="Phone:"
                  type="text"
                  minLength="5"
                  maxLength="15"
                  IconClassName="fas fa-phone"
                  handleChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value.split(" ").join(""),
                    })
                  }
                />
              </S.InputWrapper>
              <Button>Edit Student</Button>
            </form>
          </S.FormWrapper>
        </Section>
      ) : (
        <Redirect to="/students" />
      )}
    </>
  );
}

export default EditStudent;
