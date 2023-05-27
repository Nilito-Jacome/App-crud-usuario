import UserForm from "./components/UserForm";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";

function App() {
  const [usersListado, setUsersListado] = useState(
    []
  ); /* sirve para generar el estado que se pasara al mcomponente */
  const [userEdit, setUserEdit] = useState(null);

  /*
   GET
    axios.get(url) .then() .catch()           trae infomacion de la API
    POST
    axios.post(url, body) .then() .catch()     envia informacion a la API
   */

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    /* se utiliza el getdata para eliminar lineas codigo ya que esta estructura se repite y se utiliza para ejecutar */
    axios
      .get(
        "https://users-crud.academlo.tech/users/"
      ) /*  se coloca la Url de la api que este ligado al get o llamado */
      .then((resp) => setUsersListado(resp.data))
      .catch((error) => console.error(error));
  };

  const masUser = (user) => {
    axios
      .post(
        "https://users-crud.academlo.tech/users/",
        user
      ) /*  se coloca la Url de la api que este ligado al POST */
      .then(() => {
        getData(); /* Se coloca el getData en el tehen para ejecutar y garantizar que se visualice el cambio una vez que se halla realizado la creacion del usuario */
        setUserEdit(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(
        `https://users-crud.academlo.tech/users/${idUser}/`
      ) /* se coloca la Url de la api que este ligado al Delete con la backtist antes del final de la url esta el id del elemento el cual debe estar referenciado de forma dinamica con el id del elemento*/
      .then(() =>
        getData()
      ) /* Se coloca el getData en el tehen para ejecutar y garantizar que se visualice el cambio una vez que se halla realizado la creacion del usuario */
      .catch((error) => console.error(error));
  };

  const userActualization = (idUser) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${idUser}/`)
      .then((resp) => setUserEdit(resp.data))
      .catch((error) => console.error(error));
  };

  const selectUser = async (userData) => {
    try {
      const respuesta = await axios.put(
        `https://users-crud.academlo.tech/users/${userData.id}/`,
        userData
      );
      getData();
      setUserEdit(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Total-container">
      <div className="UserForm">
        <UserForm
          addUser={
            masUser
          } /* Se coloca primero la propiedad que esta en el componente y luego se iguala a la caracteristica, funcion o estado que se desea pasar al componente */
          selectUser={userEdit}
          userUpdate={selectUser}
        />
      </div>
      <div className="UserList">
        <UserList
          usersList={
            usersListado
          } /* Se coloca primero la propiedad que esta en el componente y luego se iguala a la caracteristica, funcion o estado que se desea pasar al componente */
          confirmDelete={
            deleteUser
          } /* Se coloca primero la propiedad que esta en el componente y luego se iguala a la caracteristica, funcion o estado que se desea pasar al componente */
          actualizationUser={userActualization}
        />
      </div>
    </div>
  );
}

export default App;
