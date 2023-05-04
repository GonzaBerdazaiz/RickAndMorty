import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  //Hooks
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // si access es falso hacemos navigate al logging nuevamente. Si quiero saltear a ir directamente a /home, con este useEffect vamos nuevamente al login
    !access && navigate("/");
  }, [access, navigate]); // un hook que se ejecuta cuando el componente se monta o actualiza

  //Credenciales Form
  const username = "gonza@gmail.com";
  const password = "123456";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales Incorrectas");
    }
  };

  const onSearch = (id) => {
    //const URL = "https://be-a-rym.up.railway.app/api";
    //const KEY = "e37c2a7dab26.98658492c093d0d26653";
    const URL = "http://localhost:3001/rickandmorty/";

    if (!characters.find((char) => char.id === id)) {
      alert("Personaje repetido");
    }

    fetch(`${URL}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          alert("Algo salio mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
