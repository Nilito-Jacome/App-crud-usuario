import './UserForm.css';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const emptyUser = {  
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",  
};

function UserForm({ addUser, selectUser, userUpdate }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selectUser) {
      reset(selectUser);
    } else {
      reset(emptyUser);
    }
  }, [selectUser, reset]);

  const submit = (data) => {
    if (selectUser) {
      console.log("Updating user with ID:", selectUser.idUser);
      userUpdate(data);
    } else {
      addUser(data);
      reset(emptyUser);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="Formulario">
      <h1 className="Titulo_1"> {selectUser ? "Editar" : "CREATE"} USERS</h1>

      <div className="input-wrapper">
        <label htmlFor="email"> Email: </label>
        <input
          type="text"
          id="email"
          placeholder="Your email"
          {...register("email", { required: true })}
          autoComplete="new-password"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Your password"
          {...register("password", { required: true })}
          autoComplete="new-password"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="first_name"> Name: </label>
        <input
          type="text"
          id="first_name"
          placeholder="Your name"
          {...register("first_name", { required: true })}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="last_name"> Last Name: </label>
        <input
          type="text"
          id="last_name"
          placeholder="Your last name"
          {...register("last_name", { required: true })}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="birthday"> Birthday: </label>
        <input
          type="date"
          id="birthday"
          placeholder="1995-04-02"
          {...register("birthday", { required: true })}
        />
      </div>
      <button className="Usuario" type="submit">
        {selectUser ? "Editar" : "Create"} User
      </button>
    </form>
  );
}

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  selectUser: PropTypes.object,
  userUpdate: PropTypes.func.isRequired,
};

export default UserForm;
