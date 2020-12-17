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
    title: "Add students",
    path: "/addstudents",
    icon: <AiIcons.AiFillFileAdd />,
  },
  {
    title: "Courses",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Add Course",
    path: "/team",
    icon: <FaIcons.FaAddressBook />,
  },
  {
    title: "Groups",
    path: "/messages",
    icon: <FaIcons.FaLayerGroup />,
  },
];
