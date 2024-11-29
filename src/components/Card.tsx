import React, { useState } from "react";
import styles from './../styles/Card.module.css' 
import Modal from "./Modal"; 
import { useNavigate, useLocation } from 'react-router-dom'; 

interface CardProps {
  image: string;
  title: string;
  description: string;
  comics1: string;
  comics2: string;
  id: number; 
}

const Card: React.FC<CardProps> = ({ image, title, description, comics1, comics2, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(image);
  const navigate = useNavigate(); 
  const location = useLocation();

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
        comics1={comics1}
        comics2={comics2}
      />
    </>
  );
};

export default Card;

