import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import CharactersPage from './CharactersPage';
 import CharacterDetails from './CharacterDeetail';
 import { Header } from './Header';
 import ComicsPage from './ComicsPage';
 import ComicsDetails from './ComicsDeetail';
 
 const Navigation = () => {
   return (
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<CharactersPage />} />
         <Route path="/characters/:characterId" element={<CharacterDetails />} />
         <Route path='/comics' element={<ComicsPage />} />
         <Route path="/comics/:comicsId" element={<ComicsDetails />} />
       </Routes>
     </Router>
   );
 };
 
 export default Navigation;