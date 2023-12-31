import { useDispatch } from 'react-redux'
import { useState } from 'react';
import ModalValidationAddToCart from '../modal/modalValidation/ModalValidationAddToCart';
import { useNavigate } from 'react-router-dom';
import { resetStringFromShopChoice} from '../../store/cartSlice'


export default function ChoiceButton(props) {

  const stringChoice = props.stringChoice
  const productWithQuantity  =props.productWithQuantity 

  const [isSubmenuValidationOpen, setSubmenuValidation]= useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleAddToStringing = () => {
    console.log("stringchoice page string",stringChoice[0])
    dispatch( resetStringFromShopChoice(stringChoice[0]))
    navigate("/cordez")
  }

  
  return (
    <>

      <button 
      className="btn btn-green btn-choice"
      onClick={handleAddToStringing} >
        Choisir ce cordage
      </button>

      {isSubmenuValidationOpen && 
        <ModalValidationAddToCart 
        productWithQuantity={productWithQuantity}
        setSubmenuValidation={setSubmenuValidation}
        />
      }

    </>
  )

}


