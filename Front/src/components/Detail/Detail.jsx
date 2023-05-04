import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams(); //nos permite obtener el valor detailId que indicamos en App
  const [character, setCharacter] = useState({});

  useEffect(() => {
    //const URL = "https://be-a-rym.up.railway.app/api";
    //const KEY = "e37c2a7dab26.98658492c093d0d26653";
    const URL = "http://localhost:3001/rickandmorty";

    axios(`${URL}/detail/${detailId}`).then((response) =>
      setCharacter(response.data)
    ); //de la respuesta q da axios, hay una propiedad llamada data q es donde esta la data
  }, [detailId]); //Cuando el componente se monta se ejecuta este hooks

  return (
    <div className={style.Detail}>
      {character.name ? (
        <>
          <img className={style.Picture} src={character.image} alt="img" />
          <h2 className={style.Nombre}> NOMBRE: {character.name} </h2>
          <h4 className={style.Detalles}>
            <p> ESTADO: {character.status} </p>
            <p> ESPECIE: {character.species} </p>
            <p> GENERO: {character.gender} </p>
            <p> ORIGEN: {character.origin?.name} </p>
          </h4>
        </>
      ) : (
        <h3 className={style.Loading}> Loading... </h3>
      )}
    </div>
  );
};

export default Detail;
