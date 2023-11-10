// loadproductListFiltered est appelé car le denier select de la liste se met charge tout seul ???
// problème quand on décoche toutes les options choisi il ne revient pas à sa configuration initiale ...

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import NavbarShop from "../../components/navbar/NavbarShop"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import BackNavArrow from '../../components/button/BackNavArrow'

export default function Accessories() {

  const [accessoriesList, setAccessoriesList] = useState("");


  //fonction asynchrone vers le backend pour recupérer 
  //une liste des marques de cordages de manière aléatoire
  const loadProductListRandom = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/productListRandom`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"accessories" }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        setAccessoriesList(result.productListRandom);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }



  // charger une liste de cordages aléatoires au chargement de la page
    useEffect(() => {
      loadProductListRandom ()
    },[])

    
 
  

  return (

    <>

      <NavbarShop  />

      <main className="shop__main">

        <div className="shop__bg"> </div>

        <section className="shop__contenair">

          <BackNavArrow />

          <h1 className="title-products"> Accessoires</h1>

 

          {accessoriesList.length > 0 ? (

            <div className="cardProducts__contenair">

              {accessoriesList.map((product, index) => (
                <NavLink 
                  key={index} 
                  to={`/fiche_produit/accessoire/${product.id}`}
                  className="cardProduct__wrapper"
                >
                  <img 
                    crossOrigin="anonymous" 
                    src={product.image_url} 
                    alt={product.model} 
                    className="cardProduct__image"
                  />
                  <div className="cardProduct__nameMark">{product.mark}</div>
                  <div className="cardProduct__packaging">{product.type_product}</div>
                  <div className="cardProduct__model">{product.model}</div>
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