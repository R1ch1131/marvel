import React from "react";
import styles from "./../styles/Footer.module.css"
import marvel from "/public/marvel.png";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerFlex}>
            <img className={styles.img} src={marvel} alt="marvel" />
            <p>Data provided by Marvel. © 2024 MARVEL</p>
            <a href="developer.marvel.com">developer.marvel.com</a>
        </div>
    </div>
  );
};