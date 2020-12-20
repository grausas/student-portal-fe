export const LoginUser = [
  {
    name: "email",
    type: "email",
    labelText: "Email",
    required: true,
    minLength: 6,
    maxLEngth: 256,
    placeholder: "jonas@email.lt",
  },
  {
    name: "password",
    type: "password",
    labelText: "Password",
    required: true,
    minLength: 8,
    maxLength: 64,
    placeholder: "password",
  },
];

export const addStudent = [
  {
    name: "name",
    type: "text",
    labelText: "Name",
    required: true,
    minLength: 2,
    maxLength: 50,
    placeholder: "Jonas",
  },
  {
    name: "surname",
    type: "text",
    labelText: "Surname",
    required: true,
    minLength: 2,
    maxLEngth: 50,
    placeholder: "Jonaitis",
  },
  {
    name: "email",
    type: "email",
    labelText: "Email",
    required: true,
    minLength: 6,
    maxLEngth: 256,
    placeholder: "jonas@mail.lt",
  },
];
export const addGroup = [
  {
    name: "groupId",
    type: "number",
    labelText: "Group",
    required: true,
    placeholder: "Enter group number",
  },
  {
    name: "studentId",
    type: "dropdown",
    labelText: "Student",
    required: true,
  },
];
export const addCourse = [
  {
    name: "courseName",
    type: "text",
    labelText: "Name",
    required: true,
    placeholder: "name",
  },
  {
    name: "description",
    type: "text",
    labelText: "Description",
    required: true,
    placeholder: "course description...",
  },
  {
    name: "lecturerId",
    type: "dropdown",
    labelText: "Lecturer",
    required: true,
  },
  {
    name: "groupId",
    type: "dropdown",
    labelText: "Group",
    required: true,
  },
];
