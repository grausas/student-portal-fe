import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

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
      title: "Action",
      render: (rowData) => {
        return (
          <>
            <span onClick={handleDelete(rowData)}>
              <AiIcons.AiFillDelete
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
              <FaIcons.FaEdit
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
    title: "Course Title",
    render: (rowData) => {
      return rowData.name;
    },
  },
  {
    title: "Lecturer",
    render: (rowData) => {
      return rowData.lecturer;
    },
  },
  {
    title: "Description",
    render: (rowData) => {
      return rowData.description;
    },
  },
  {
    title: "Students",
    render: (rowData) => {
      return rowData.group;
    },
  },
];

export const tableGroup = [
  {
    title: "Group",
    render: (rowData) => {
      return rowData.groupId;
    },
  },
  {
    title: "Students",
    render: (rowData) => {
      return rowData.student;
    },
  },
];
