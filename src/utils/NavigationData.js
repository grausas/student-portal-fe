import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";

export const NavigationData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Students",
    path: "/students",
    icon: <Io5Icons.IoPeople />,
  },
  {
    title: "Add Student",
    path: "/addstudent",
    icon: <AiIcons.AiFillFileAdd />,
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Add Course",
    path: "/addcourse",
    icon: <FaIcons.FaAddressBook />,
  },
  {
    title: "Groups",
    path: "/groups",
    icon: <FaIcons.FaLayerGroup />,
  },
];
