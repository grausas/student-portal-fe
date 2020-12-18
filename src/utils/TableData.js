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
      return rowData.id;
    },
  },
];
export const tableGroup = [
  {
    title: "Group",
    render: (rowData) => {
      return rowData.id;
    },
  },
  {
    title: "Student",
    render: (rowData) => {
      return rowData.name + " " + rowData.surname;
    },
  },
];
