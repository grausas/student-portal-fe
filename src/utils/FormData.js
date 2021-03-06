export const LoginUser = [
  {
    name: "email",
    type: "email",
    labelText: "Email:",
    required: true,
    minLength: 6,
    maxLength: 256,
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    labelText: "Password:",
    required: true,
    minLength: 8,
    maxLength: 64,
    placeholder: "Password",
  },
];

export const addStudent = [
  {
    name: "name",
    type: "text",
    labelText: "Name:",
    required: true,
    minLength: 2,
    maxLength: 50,
    placeholder: "Jonas",
    IconClassName: "fas fa-user",
  },
  {
    name: "surname",
    type: "text",
    labelText: "Surname:",
    required: true,
    minLength: 2,
    maxLength: 50,
    placeholder: "Jonaitis",
    IconClassName: "fas fa-user",
  },
  {
    name: "email",
    type: "email",
    labelText: "Email:",
    required: true,
    minLength: 6,
    maxLength: 256,
    placeholder: "jonas@mail.lt",
  },
  {
    name: "phone",
    type: "text",
    labelText: "Phone:",
    required: true,
    minLength: 5,
    maxLength: 15,
    placeholder: "37062812345",
    IconClassName: "fas fa-phone",
  },
];
export const addGroup = [
  {
    name: "groupId",
    type: "number",
    labelText: "Group Name:",
    required: true,
    placeholder: "Enter group number",
    IconClassName: "fas fa-user",
  },
  {
    name: "studentId",
    type: "dropdown",
    labelText: "Student:",
    required: true,
  },
];
