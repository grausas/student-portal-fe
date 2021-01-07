import React from "react";
import * as FaIcons from "react-icons/ai";

export const tableStudents = (handleDelete, handleEdit) => {
  return [
    {
      title: "Full name",
      render: (rowData) => {
        return (
          <span style={{ color: "#01baef", textDecoration: "underline" }}>
            {rowData.fullname}
          </span>
        );
      },
    },
    {
      title: "Email",
      render: (rowData) => {
        return rowData.email;
      },
    },
    {
      title: "Phone",
      render: (rowData) => {
        return rowData.phone;
      },
    },
    {
      title: "Course",
      render: (rowData) => {
        return rowData.studing ? rowData.studing : "Not Studying";
      },
    },
    {
      title: "Actions",
      render: (rowData) => {
        return (
          <>
            <span onClick={handleDelete(rowData)}>
              <FaIcons.AiFillDelete
                style={{
                  color: "red",
                  fontSize: "1.3em",
                  padding: "0",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              />
            </span>
            <span onClick={handleEdit(rowData)}>
              <FaIcons.AiFillEdit
                style={{
                  color: "green",
                  fontSize: "1.3em",
                  padding: "0",
                  cursor: "pointer",
                }}
              />
            </span>
          </>
        );
      },
    },
  ];
};

export const tableCourse = [
  {
    title: "Name",
    render: (rowData) => {
      return rowData.name;
    },
  },
  {
    title: "Description",
    render: (rowData) => {
      return rowData.description;
    },
  },
  {
    title: "Lecturer",
    render: (rowData) => {
      return rowData.lecturer;
    },
  },
  {
    title: "Group Students",
    render: (rowData) => {
      return rowData.group;
    },
  },
];

export const tableGroup = [
  {
    title: "Group",
    render: (rowData) => {
      return rowData.groupid;
    },
  },
  {
    title: "Students",
    render: (rowData) => {
      return rowData.student;
    },
  },
];
