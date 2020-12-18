import React, { useEffect, useState } from "react";
import { Section, Table } from "../../components/index";
import { tableGroup } from "../../utils/TableData";

function Students() {
  const [groups, setGroups] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-groups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);
  return (
    <Section>
      <h2>Groups</h2>
      <Table cols={tableGroup} data={groups} tableTitle="Groups" />
    </Section>
  );
}

export default Students;
