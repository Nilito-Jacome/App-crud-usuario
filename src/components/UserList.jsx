import PropTypes from 'prop-types';

const UserList = ({ usersList, confirmDelete, actualizationUser}) => {  /* se pasa estas propiedades al APP como props */
/*
    const confirmDelete = (id) => {
        const resultConfirm = confirm("Deseas eliminar al usuario?")

        if( resultConfirm ) deleteUserAction(id)
    }
*/
    return (
        <div>
            <h1 className='Titulo_2' >Users</h1>
        <ul >
          {usersList?.map (user => (
            <li className="CardUser" key={user.id}>
              <h4>
                <span> Email:</span> {user.email} 
              </h4>
              <h4>
                <span> Password:</span> {user.password}
              </h4>
              <h4>
                <span> Name:</span> {user.first_name}
              </h4>
              <h4>
                <span> Last Name:</span> {user.last_name}
              </h4>
              <h4>
                <span> Birthday:</span> {user.birthday}
              </h4>
  
              <button className="Eliminar" href onClick={() => confirmDelete(user.id)}>Delete user</button>
              <button className="Editar" onClick={() => actualizationUser(user.id)}>Actualization User</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default UserList;

UserList.propTypes = {
    usersList : PropTypes.string,
    confirmDelete : PropTypes.string,
    actualizationUser : PropTypes.string,
}
