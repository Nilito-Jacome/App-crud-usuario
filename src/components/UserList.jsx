import './UserList.css';
import PropTypes from 'prop-types';

const UserList = ({ usersList, confirmDelete, actualizationUser }) => {
  return (
    <div>
      <h1 className='Titulo_2'>USERS</h1>
      <ul>
        {usersList?.map(user => (
          <li className="CardUser" key={user.idUser}>
            <h4><span>Email:</span> {user.email}</h4>
            <h4><span>Password:</span> {user.password}</h4>
            <h4><span>Name:</span> {user.first_name}</h4>
            <h4><span>Last Name:</span> {user.last_name}</h4>
            <h4><span>Birthday:</span> {user.birthday}</h4>

            <button className="Eliminar" onClick={() => confirmDelete(user.idUser)}>Delete user</button>
            <button className="Editar" onClick={() => actualizationUser(user.idUser)}>Update User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  usersList: PropTypes.array.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  actualizationUser: PropTypes.func.isRequired,
};

export default UserList;
