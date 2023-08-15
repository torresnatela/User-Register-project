import React, { useState } from "react";
import Button from "./Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userData, setUserData] = useState({
    nome: "",
    idade: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.addUserToDataSet(userData);

    //reset data values from form.
    setUserData({
      nome: "",
      idade: "",
    });
  };

  const formHandler = (value, type) => {
    if (type === "number") {
      setUserData({
        ...userData,
        idade: value,
      });
    } else
      setUserData({
        ...userData,
        nome: value,
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label className={styles.label}>
            Nome
            <input
              value={userData.nome}
              type="text"
              className={styles.input}
              onChange={(e) => formHandler(e.target.value, e.target.type)}
            />
          </label>
          <label className={styles.label}>
            Idade
            <input
              value={userData.idade}
              type="number"
              className={styles.input}
              onChange={(e) => formHandler(e.target.value, e.target.type)}
            />
          </label>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
