import React from "react";
import Card from "./Card";
import styles from './../styles/Page.module.css'
import ComicsData from './ComicsData';

const ComicsPage: React.FC = () => {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.text}>
          <p>Comics</p>
          <p className={styles.counter}>({ComicsData.length})</p>
        </div>
        <div className={styles.search}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search for Comics by Name"
          />
          <button className={styles.button}>SEARCH</button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {ComicsData.map((card) => (
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

export default ComicsPage;
