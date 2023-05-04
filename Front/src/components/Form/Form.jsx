import { useState } from "react";
import style from "./Form.module.css";
import validation from "./Validaciones";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    //recibe el evento y asi modificamos el estado
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value }); //lo que ya tiene form. lo que quiero modificar esta en property y le damos value. o lo de abajo
    validation({ ...userData, [property]: value }, errors, setErrors); //cada vez q modificamos el estado, lo validamos

    //   if (property === "username") {
    //   setuserData({ ...userData, username: value });
    // }
    // if (property === "password") {
    //   setuserData({ ...userData, username: value });
    // }
  };

  const submitHandler = (event) => {
    // si no hacemos esta funcion, se recarga la pagina y perdemos lo que cargamos en el estado
    event.preventDefault(); //para que no recargue la pagina
    login(userData);
  };

  return (
    <form onSubmit={submitHandler} className={style.Container}>
      <h1 className={style.Title}> Iniciar Sesion</h1>
      <div>
        <label className={style.User} htmlFor="username">
          Username:
        </label>
        <input
          className={style.Input1}
          type="text"
          name="username"
          size="25"
          placeholder="Escriba su mail.."
          value={userData.username} //para que lo ingresado modifique el estado
          onChange={handleChange} // Cuando escribo, se dispara handleChange
        />
      </div>
      <p className={style.ErrorU}>{errors.username}</p>
      <div>
        <label className={style.Pass} htmlFor="password">
          Password:
        </label>
        <input
          className={style.Input2}
          type="text"
          name="password"
          size="25"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <p className={style.ErrorP}>{errors.password}</p>
      <button className={style.Boton} type="submit">
        Login
      </button>
    </form>
  );
};

export default Form;
