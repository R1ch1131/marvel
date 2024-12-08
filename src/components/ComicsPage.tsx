import React, { useEffect, useState } from "react";
 import Card from "./Card";
 import styles from './../styles/Page.module.css'
 import marvelStore from '../stores/MarvelStore';
  import { observer } from 'mobx-react-lite';
 import useDebounce from '../hooks/useDebounce';
 import Pagination from "./Pagination";
import { Footer } from "./Footer";
 
 const ComicsPage = observer(() => {
      const [search, setSearch] = useState('');
     const debouncedSearch = useDebounce(search, 3000)
     const currentPage = marvelStore.offsetComics/ marvelStore.limit + 1;
 
     const totalPages = Math.ceil(marvelStore.totalComics / marvelStore.limit);
 
     useEffect(() => {
       marvelStore.fetchComics();
     }, [marvelStore.offsetComics]);
     
      useEffect(() => {
          if (search) {
              marvelStore.setSearchQueryComics(debouncedSearch);
              marvelStore.fetchComics();
          }
     }, [debouncedSearch])
 
        const handlePageChange = (page: number) => {
            const offset = (page - 1) * marvelStore.limit;
            marvelStore.setOffsetComics(offset);
       };
     
      const handleSearch = () => {
         marvelStore.setSearchQueryComics(search);
         marvelStore.fetchComics()
      }
 
   return (
     <div>
       <div className={styles.title}>
         <div className={styles.text}>
           <p>Comics</p>
           <p className={styles.counter}>({marvelStore.totalComics})</p>
         </div>
         <div className={styles.search}>
           <input
             className={styles.input}
             type="text"
             placeholder="Search for Comics by Name"
             value={search}
             onChange={e => setSearch(e.target.value)}
           />
           <button className={styles.button} onClick={handleSearch}>SEARCH</button>
         </div>
       </div>
       <div className={styles.cardContainer}>
         {marvelStore.comics.map((card) => (
           <Card
             key={card.id}
             image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
             title={card.title}
             description={card.description}
               comics={card.characters.items.map(item => item.name)}
             id={card.id}
           />
         ))}
       </div>
          <Pagination
             currentPage={currentPage}
             totalPages={totalPages}
             onPageChange={handlePageChange}
         />
         <Footer />
     </div>
   );
 });
 
 export default ComicsPage;