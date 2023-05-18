import React, { useEffect, useState } from "react";
import styles from "./CssModules/Content.module.css";
import { ToDo } from "./ToDoList";
import { UserManagment } from "./UserManagment";
import { Users } from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calculator } from "./Calculator/Calculator";

const Content = () => {
  const UsersState = JSON.parse(localStorage.getItem("usersState"));
  const [usersState, changeUsersList] = useState(UsersState);
  const [addUserNameState, changeUserName] = useState("");

  useEffect(() => {
    changeUsersList(UsersState);
  }, []);
  useEffect(() => {
    localStorage.setItem("usersState", JSON.stringify(usersState));
  }, [usersState]);

  return (
    <div className={styles.content}>
      <Routes>
          <Route path="/UserManagment/" element={
          <UserManagment 
          UsersState = {UsersState}
          usersState = {usersState}
          changeUsersList = {changeUsersList}
          addUserNameState = {addUserNameState}
          changeUserName = {changeUserName} />} 
          />
          <Route path="/Users/" element={
          <Users
          usersState = {usersState} 
          />} />
          <Route path="/ToDoList/" element={<ToDo />} />
          <Route path="/Calculator/" element={<Calculator />} />
        </Routes>
    </div>
  );
};
export { Content };
