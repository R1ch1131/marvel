import React from "react";
import styles from "./../styles/Header.module.css"
import marvel from "/public/marvel.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerFlex}>
        <div>
          <img className={styles.img} src={marvel} alt="marvel" />
        </div>
        <div>
          <div className={styles.nav}>
            <Link className={styles.link} to="/">Characters</Link>
            <Link className={styles.link} to="/comics">Comics</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
