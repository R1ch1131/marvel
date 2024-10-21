import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ComicsData from './ComicsData';

const ComicsDetails = () => {
    const { comicsId } = useParams();
    const navigate = useNavigate();

  const comics = comicsId 
  ? ComicsData.find(card => card.id === parseInt(comicsId))
  : null;

  if (!comics) {
    return <div>Персонаж не найден</div>;
  }

  return (
    <div>
      <Modal 
        isOpen={true}
        onClose={() => navigate(-1)}
        image={comics.image}
        title={comics.title}
        description={comics.description}
        comics1={comics.comics1}
        comics2={comics.comics2}
      />
    </div>
  );
};

export default ComicsDetails;