import React, { useState } from "react";
import { Section, InputField, Button } from "../../components/index";

function signUser(userData) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUser(userData);
        }}
      >
        <InputField
          name={"email"}
          inputId={"email"}
          type={"email"}
          labelText={"Email"}
          required={true}
          minLength={4}
          maxLength={254}
          placeholder={"jonas@email.com"}
          handleChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
        />
        <InputField
          type={"password"}
          name={"password"}
          inputId={"password"}
          labelText={"Password"}
          required={true}
          minLength={8}
          maxLength={32}
          placeholder={"password"}
          handleChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Button>Login</Button>
      </form>
    </Section>
  );
}

export default Login;
