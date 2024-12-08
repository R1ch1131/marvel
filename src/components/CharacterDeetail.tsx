import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { observer } from 'mobx-react-lite';
import marvelStore from '../stores/MarvelStore';
import { useEffect, useState } from 'react';
import { Character } from '../models/Character';


const CharacterDetails = observer(() => {
    const { characterId } = useParams();
    const navigate = useNavigate();
     const [character, setCharacter] = useState<Character | undefined>(undefined);


  useEffect(() => {
    const fetchData = async () => {
      if (characterId) {
        const char = await marvelStore.fetchCharacterDetails(parseInt(characterId));
          setCharacter(char)
      }
    };
    fetchData()
  }, [characterId]);


  if (!character) {
    return <div>Персонаж не найден</div>;
  }

  const comics = character.comics.items.map(item => item.name)
    return (
        <div>
            <Modal
                isOpen={true}
                onClose={() => navigate(-1)}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                title={character.name}
                description={character.description}
                comics={comics}
            />
        </div>
    );
});

export default CharacterDetails;