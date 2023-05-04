import { useState } from "react";
import style from "./Search.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  }; //event.target es el input y el value lo que esta escribo en el input

  return (
    <div className={style.Barra}>
      <input className={style.Busqueda} type="search" onChange={handleChange} />
      <button
        className={style.Boton}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
