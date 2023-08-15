import React from "react";
import Card from "./Card";

const UserList = (props) => {
  const renderUserList = () => {
    return props.data.map((user) => (
      <tr>
        <td>{user.nome}</td>
        <td>{user.idade}</td>
      </tr>
    ));
  };

  return <div>{renderUserList()}</div>;
};

export default UserList;
