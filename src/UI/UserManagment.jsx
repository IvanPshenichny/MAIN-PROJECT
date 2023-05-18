import React, { useState, useEffect } from "react";
import styless from "./CssModules/Users.module.css";
import styles from "./CssModules/Content.module.css";

function UserManagment(props) {
  const DeleteUsers = (id) => {
    props.changeUsersList(props.usersState.filter((item) => item.id !== id));
  };
  const AddUsers = () => {
    if (props.addUserNameState.length > 0) {
      props.changeUsersList(
        props.usersState.concat({
          id: props.usersState.length + 1,
          Name: props.addUserNameState,
        })
      );
      props.changeUserName("");
    }
  };
  const ChangeUserName = (e) => {
    props.changeUserName(e.target.value);
  };
  const Users = props.usersState.map((u) => {
    return (
      <div className={styless.usersManagment}>
        <div>
          <button onClick={() => DeleteUsers(u.id)}>Delete</button>
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" />
          {u.Name}
        </div>
      </div>
    );
  });
  return (
    <div className={styles.insideContent}>
      <div>
        <textarea
          placeholder="Add Name"
          value={props.addUserNameState}
          onChange={ChangeUserName}
        ></textarea>
      </div>
      <div>
        <button onClick={AddUsers}>Add new user</button>
      </div>
      <div className={styless.usersManagment}>{Users}</div>
    </div>
  );
}
export { UserManagment };
