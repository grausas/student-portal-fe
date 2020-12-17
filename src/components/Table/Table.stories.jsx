import { storiesOf } from "@storybook/react";
import React from "react";
import Table from "../Table/Table";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { tableStudents } from "../../utils/TableData";

storiesOf("Table", module).add("Form Template ", () => (
  <ThemeProvider theme={theme}>
    <Table
      cols={tableStudents}
      data={[{ name: "Marius", surname: "Pikzirnis" }]}
    />
  </ThemeProvider>
));
