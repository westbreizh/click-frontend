import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import NavbarShop from "../../components/navbar/NavbarShop"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import BackNavArrow from '../../components/button/BackNavArrow'


export default function Ball() {

  const [ballList, setBallList] = useState("");

  //fonction asynchrone vers le backend pour recupérer 
  //une liste des marques de cordages de manière aléatoire
  const loadProductListRandom = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/productListRandom`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"ball" }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        setBallList(result.productListRandom);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  




  // charger une liste de balles aléatoires 
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

          <h1 className="title-products"> Balles </h1>
          

          {ballList.length > 0 ? (

            <div className="cardProducts__contenair">

              {ballList.map((product, index) => (
                <NavLink 
                  key={index} 
                  to={`/fiche_produit/balle/${product.id}`}
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
                  <div className="cardProduct__packaging">{product.packaging}</div>
                  <div className="cardProduct__price">{product.price} €</div>
                </NavLink>
                ))}

            </div>

            ) : (

            <div className="loading__spinner__contenair">
              <TennisSpinner />
            </div>
          )}

        </section>

      </main>

    </>
    )
}