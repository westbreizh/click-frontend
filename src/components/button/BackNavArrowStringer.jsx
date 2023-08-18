import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom';


export default function BackNavArrowStringer() {

  const navigate = useNavigate();
  
  function handleBackClick() {
    navigate(-1); // Navigue vers la page précédente
  }

  return(

    <div className="btn-back-stringer__wrapper" onClick={handleBackClick}>

      <div className='btn-back-stringer__bubble'>
          <ArrowBackIcon className="btn-back-stringer__icon-back"/>
      </div>

    </div>
    
  )
}

