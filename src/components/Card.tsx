import React, { useState, useEffect } from "react";
import styles from './../styles/Card.module.css'
import Modal from "./Modal";
import { useNavigate, useLocation } from 'react-router-dom';


interface CardProps {
  image: string;
  title: string;
  description: string;
  comics: string[];
  id: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, comics, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(image);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    console.log("Card Data:", { image, title, description, comics, id });
  }, [image, title, description, comics, id]);


  const handleOpenModal = () => {
    setModalImage(image);
    setIsModalOpen(true);

    if (location.pathname.includes('comics')) {
      navigate(`/comics/${id}`);
    } else {
      navigate(`/characters/${id}`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.card} onClick={handleOpenModal}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={modalImage}
        title={title}
        description={description}
        comics={comics}
      />
    </>
  );
};

export default Card;