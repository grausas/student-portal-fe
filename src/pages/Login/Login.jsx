import React from "react";
import { useHistory } from "react-router-dom";
import { Section, Form } from "../../components/index";
import { LoginUser } from "../../utils/FormData";

function signUser(userData, history) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then(() => history.push("/"));
}

function Login() {
  const history = useHistory();

  return (
    <Section>
      <Form
        callback={(fieldValues) => signUser(fieldValues, history)}
        fields={LoginUser}
        titleText="Login"
        buttonText="Login"
      />
    </Section>
  );
}

export default Login;
