import React from "react";
import Card from "./Card";
import CharaсterData from "./CharaсterData";
import  styles from './../styles/Page.module.css'


const CharactersPage: React.FC = () => {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.text}>
          <p>Characters</p>
          <p className={styles.counter}>({CharaсterData.length})</p>
        </div>
        <div className={styles.search}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search for Characters by Name"
          />
          <button className={styles.button}>SEARCH</button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {CharaсterData.map((card) => (
          <Card
            key={card.id} 
            image={card.image}
            title={card.title}
            description={card.description}
            comics1={card.comics1}
            comics2={card.comics2}
            id={card.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
