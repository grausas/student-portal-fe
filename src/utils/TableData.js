export const tableStudents = [
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
];
