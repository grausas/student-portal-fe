import React, { useEffect, useState } from "react";
import { Section } from "../../components";
import { useLocation } from "react-router-dom";

function EditStudent() {
  const location = useLocation();
  const [editStudent, setEditStudent] = useState({});

  useEffect(() => {
    const studentData = location.state.detail;
    setEditStudent({
      id: studentData.id,
      name: studentData.fullname.split(" ")[0],
      surname: studentData.fullname.split(" ")[1],
      email: studentData.email,
      phone: studentData.phone,
    });
  }, [location]);

  return (
    <Section>
      <h2>Edit Student</h2>
      <li> {editStudent.name} </li>
    </Section>
  );
}

export default EditStudent;
