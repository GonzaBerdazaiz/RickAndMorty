import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { orderCards, filterCards } from "../Redux/actions";
import { useState } from "react";
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.Container}>
      <div className={style.Filtros}>
        <div className={style.Selector}>
          <label>Order By</label>
          <select onChange={handlerOrder} className={style.SelectorOrder}>
            <option value="Ascendente">Asc</option>
            <option value="Descendente">Des</option>
          </select>
        </div>
        <div className={style.Selector}>
          <label>Gender</label>
          <select onChange={handlerFilter} className={style.SelectorOrder}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">all Characters</option>
          </select>
        </div>
      </div>
      {favorites?.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            gender={gender}
            species={species}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
