import { useParams, useNavigate } from 'react-router-dom';
 import Modal from './Modal';
 import marvelStore from '../stores/MarvelStore';
 import { observer } from 'mobx-react-lite';
 import { useEffect, useState } from 'react';
 import { Comic } from '../models/Comic';
 
 const ComicsDetails = observer(() => {
     const { comicsId } = useParams();
     const navigate = useNavigate();
      const [comics, setComics] = useState<Comic | undefined>(undefined);
 
 
   useEffect(() => {
     const fetchData = async () => {
       if (comicsId) {
         const comic = await marvelStore.fetchComicDetails(parseInt(comicsId));
           setComics(comic)
       }
     };
     fetchData()
   }, [comicsId]);
 
   if (!comics) {
     return <div>Комикс не найден</div>;
   }
 
   const characters = comics.characters.items.map(item => item.name)
   return (
     <div>
       <Modal
         isOpen={true}
         onClose={() => navigate(-1)}
         image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
         title={comics.title}
         description={comics.description}
           comics={characters}
       />
     </div>
   );
 });
 
 export default ComicsDetails;