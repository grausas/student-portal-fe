import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("InputField", module)
  .add("Text ", () => (
    <ThemeProvider theme={theme}>
      <InputField
        name={"email"}
        inputId={"email"}
        type={"email"}
        labelText={"Email"}
        required={true}
        minLength={6}
        maxLength={20}
        placeholder={"john@email.com"}
      />
    </ThemeProvider>
  ))
  .add("Password ", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type={"password"}
        name={"password"}
        inputId={"password"}
        labelText={"Password"}
        required={true}
        minLength={6}
        maxLength={20}
        placeholder={"password"}
      />
    </ThemeProvider>
  ))
  .add("Dropdown ", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type={"dropdown"}
        name={"dropdown"}
        inputId={"dropdown"}
        labelText={"Select:"}
        required={true}
        options={[{ text: "hello" }, { text: "bye" }]}
      />
    </ThemeProvider>
  ));
