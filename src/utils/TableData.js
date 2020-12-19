import React from "react";
import * as FaIcons from "react-icons/ai";

export const tableStudents = (handleDelete) => {
  return [
    {
      title: "Name",
      render: (rowData) => {
        return rowData.name;
      },
    },
    {
      title: "Surname",
      render: (rowData) => {
        return rowData.surname;
      },
    },
    {
      title: "Email",
      render: (rowData) => {
        return rowData.email;
      },
    },
    {
      title: "Delete",
      render: (rowData) => {
        return (
          <span onClick={handleDelete(rowData)}>
            <FaIcons.AiFillDelete
              style={{
                color: "red",
                fontSize: "1.3em",
                padding: "0",
                cursor: "pointer",
              }}
            />
          </span>
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
      return rowData.name + " " + rowData.surname;
    },
  },
  {
    title: "Group",
    render: (rowData) => {
      return rowData.groupId;
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
    title: "Student",
    render: (rowData) => {
      return rowData.student;
    },
  },
];
