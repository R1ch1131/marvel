import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import CharaсterData from "./CharaсterData";


const CharacterDetails = () => {
    const { characterId } = useParams();
    const navigate = useNavigate();

  const character = characterId 
  ? CharaсterData.find(card => card.id === parseInt(characterId))
  : null; 

  if (!character) {
    return <div>Персонаж не найден</div>;
  }

  return (
    <div>
      <Modal 
        isOpen={true} 
        onClose={() => navigate(-1)} 
        image={character.image}
        title={character.title}
        description={character.description}
        comics1={character.comics1}
        comics2={character.comics2}
      />
    </div>
  );
};

export default CharacterDetails;
