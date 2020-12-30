import React, { useState, useContext } from "react";
import * as S from "./Login.style";
import { useHistory } from "react-router-dom";
import { Form, Notification } from "../../components/index";
import { LoginUser } from "../../utils/FormData";
import { AuthContext } from "../../contexts/AuthContext";

function signUser(userData, auth, setError, setType, history, error) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
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
        auth.setToken(data.token);
        history.push("/home");
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function Login() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <S.LoginBlock>
      {error && <Notification type={type}>{error}</Notification>}
      <S.ImageDiv>
        <span>
          Welcome to <span>students portal</span>{" "}
        </span>
      </S.ImageDiv>
      <S.FormDiv>
        <Form
          callback={(fieldValues) =>
            signUser(fieldValues, auth, setError, setType, history)
          }
          fields={LoginUser}
          titleText="Login"
          buttonText="Login"
        />
      </S.FormDiv>
    </S.LoginBlock>
  );
}

export default Login;
