import React, { useEffect, useState } from "react";
 import Card from "./Card";
 import styles from './../styles/Page.module.css'
 import marvelStore from '../stores/MarvelStore';
 import { observer } from 'mobx-react-lite';
 import useDebounce from '../hooks/useDebounce';
  import Pagination from "./Pagination";
import { Footer } from "./Footer";
 
 const CharactersPage = observer(() => {
     const [search, setSearch] = useState('');
     const debouncedSearch = useDebounce(search, 3000)
     const currentPage = marvelStore.offsetCharacters/ marvelStore.limit + 1;
 
     const totalPages = Math.ceil(marvelStore.totalCharacters / marvelStore.limit);
     useEffect(() => {
       marvelStore.fetchCharacters();
     }, [marvelStore.offsetCharacters])
     
      useEffect(() => {
         if(search){
             marvelStore.setSearchQueryCharacters(debouncedSearch)
             marvelStore.fetchCharacters()
         }
     }, [debouncedSearch])
 
      const handlePageChange = (page: number) => {
          const offset = (page - 1) * marvelStore.limit;
          marvelStore.setOffsetCharacters(offset);
       };
 
     const handleSearch = () => {
         marvelStore.setSearchQueryCharacters(search)
         marvelStore.fetchCharacters();
         }
 
   return (
     <div>
       <div className={styles.title}>
         <div className={styles.text}>
           <p>Characters</p>
           <p className={styles.counter}>({marvelStore.totalCharacters})</p>
         </div>
         <div className={styles.search}>
           <input
             className={styles.input}
             type="text"
             placeholder="Search for Characters by Name"
             value={search}
             onChange={e => setSearch(e.target.value)}
           />
           <button className={styles.button} onClick={handleSearch}>SEARCH</button>
         </div>
       </div>
       <div className={styles.cardContainer}>
         {marvelStore.characters.map((card) => (
           <Card
             key={card.id}
             image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
             title={card.name}
             description={card.description}
             comics={card.comics.items.map(item => item.name)}
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
 
 export default CharactersPage;