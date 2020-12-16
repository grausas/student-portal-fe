import { storiesOf } from "@storybook/react";
import React from "react";
import Form from "./Form";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { LoginUser } from "../../utils/FormData";

storiesOf("Form", module).add("Form Template ", () => (
  <ThemeProvider theme={theme}>
    <Form fields={LoginUser} titleText="Login" buttonText="Login" />
  </ThemeProvider>
));
