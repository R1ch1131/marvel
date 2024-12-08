import React from "react";
import styles from "./../styles/Modal.module.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  comics: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, title, description, comics }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className={styles.img} />
        <div className={styles.modalFlex}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.comics}>
            <h3>Comics</h3>
              {comics.map((comic, index) => (
                  <a href='#' key={index}>{comic}</a>
              ))}
          </div>
        </div>
        <button className={styles.button} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;