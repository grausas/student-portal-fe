import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, Form, Notification } from "../../components/index";
import { LoginUser } from "../../utils/FormData";

function signUser(userData, setError, setType, history, error) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
        setType("error");
      } else {
        error = false;
        setType("error");
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setError(data.msg || "Error!");
      } else {
        history.push("/");
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function Login() {
  const history = useHistory();
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <Form
        callback={(fieldValues) =>
          signUser(fieldValues, setError, setType, history)
        }
        fields={LoginUser}
        titleText="Login"
        buttonText="Login"
      />
    </Section>
  );
}

export default Login;
