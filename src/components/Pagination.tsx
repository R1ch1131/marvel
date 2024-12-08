import React from 'react';
import styles from './../styles/Pagination.module.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const maxVisiblePages = 7;
    const halfDisplay = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfDisplay);
    let endPage = Math.min(totalPages, currentPage + halfDisplay);

    if (endPage - startPage < maxVisiblePages - 1) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, maxVisiblePages);
        } else {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <button
                className={styles.navButton}
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => onPageChange(page)}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
            ))}
            <button
                className={styles.navButton}
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;