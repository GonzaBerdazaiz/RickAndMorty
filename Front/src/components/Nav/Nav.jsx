import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.NavBar}>
        <SearchBar onSearch={this.props.onSearch} />
        <Link to="/about" className={style.About}>
          <h3>About</h3>
        </Link>
        <Link to="/home" className={style.Home}>
          <h3>Home</h3>
        </Link>
        <Link to="/favorites" className={style.Fav}>
          <h3>Favorites</h3>
        </Link>
      </div>
    );
  }
}

export default Nav;
