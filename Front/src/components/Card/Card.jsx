import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, removeFavorite } from "../Redux/actions";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorites,
  removeFavorite,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorites({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.Container}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.Corazon}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.Corazon}>
          🤍
        </button>
      )}
      <button onClick={() => onClose(id)} className={style.Boton}>
        X
      </button>
      <img src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h2 className={style.Tarjetas}>{name}</h2>
      </Link>
      <h3 className={style.Tarjetas2}>{species}</h3>
      <h3 className={style.Tarjetas2}>{gender}</h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => {
      dispatch(addFavorites(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
