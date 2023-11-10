// loadproductListFiltered est appelé car le denier select de la liste se met charge tout seul ???
// problème quand on décoche toutes les options choisi il ne revient pas à sa configuration initiale ...

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import NavbarShop from "../../components/navbar/NavbarShop"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import BackNavArrow from '../../components/button/BackNavArrow'


export default function String() {

  const [stringList, setStringList] = useState("");


  //fonction asynchrone vers le backend pour recupérer 
  //une liste des marques de cordages de manière aléatoire
  const loadProductListRandom = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/productListRandom`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"string" }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        setStringList(result.productListRandom);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      //console.log(errorMessage);
    }
  }

  useEffect(() => {
    loadProductListRandom();
  },[])


  

  return (

    <>

      <NavbarShop  />

      <main className="shop__main">

        <div className="shop__bg"> </div>

        <section className="  shop__contenair">

          <BackNavArrow />

          <h1 className="title-products-string"> Cordages</h1>

          <div className="shop__text-info"> 

            <span className="shop__text-info-part-a">
            Le prix indiqué comprend la fourniture et la pose du cordage<br/>
            </span>
            <span className="shop__text-info-part-a">
            Pour avoir plus d'informations et un choix plus large de cordages,<br/> nous vous conseillons le site
            <a href="https://www.extreme-tennis.fr/fr/7-cordage-tennis" target="_blank" rel="noreferrer"> extreme tennis </a> 
            ou <a href="https://www.templeducordage.com/" target="_blank" rel="noreferrer"> le temple du cordage. </a> 
            </span>
            
          </div>



 

          {stringList.length > 0 ? (

            <div className="cardProducts__contenair">

              {stringList.map((product, index) => (
                <NavLink 
                  key={index} 
                  to={`/fiche_produit/cordage/${product.id}`}
                  className="cardProduct__wrapper"
                >

                  <img 
                    crossOrigin="anonymous" 
                    src={product.image_url} 
                    alt={product.model} 
                    className="cardProduct__image"
                  />
                  <div className="cardProduct__nameMark">{product.mark}</div>
                  <div className="cardProduct__model">{product.model}</div>
                  <div className="cardProduct__benefice-wrapper">
                    <div className="cardProduct__benefice-text">{product.first_characteristic} </div>
                    {product.second_characteristic !== "" ? <span>&nbsp;-&nbsp;</span> : null}
                    <div className="cardProduct__benefice-text">{product.second_characteristic}</div>
                  </div>
                  <div className="cardProduct__price">{product.price} €</div>
                </NavLink>
                ))}

            </div>

          ) : (

              <div className="loadingspinnerString">
              <TennisSpinner />
              </div>

          )}

        </section>

      </main>
    </>
    )
}





