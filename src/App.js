import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const pushUserOnList = (userData) => {
    setUserList([...usersList, userData]);
    console.log(usersList);
  };

  console.log(usersList);

  return (
    <div>
      <AddUser addUserToDataSet={pushUserOnList}></AddUser>
      <UserList data={usersList}></UserList>
    </div>
  );
}

export default App;
