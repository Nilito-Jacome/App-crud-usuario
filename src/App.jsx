import UserForm from "./components/UserForm";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";

function App() {
  const [usersListado, setUsersListado] = useState([]);
  const [userEdit, setUserEdit] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .then((resp) => setUsersListado(resp.data))
      .catch((error) => console.error(error));
  };

  const addUser = (user) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/users`, user)
      .then(() => {
        getData();
        setUserEdit(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/users/${idUser}`)
      .then(() => getData())
      .catch((error) => console.error(error));
  };

  const userActualization = (idUser) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/users/${idUser}`)
      .then((resp) => setUserEdit(resp.data))
      .catch((error) => console.error(error));
  };

  const updateUser = (userData) => {
    console.log("Updating user with ID:", userData.idUser);
    axios
      .put(`${import.meta.env.VITE_API_URL}/users/${userData.idUser}`, userData)
      .then(() => {
        getData();
        setUserEdit(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Total-container">
      <div className="UserForm">
        <UserForm
          addUser={addUser}
          selectUser={userEdit}
          userUpdate={updateUser}
        />
      </div>
      <div className="UserList">
        <UserList
          usersList={usersListado}
          confirmDelete={deleteUser}
          actualizationUser={userActualization}
        />
      </div>
    </div>
  );
}

export default App;
