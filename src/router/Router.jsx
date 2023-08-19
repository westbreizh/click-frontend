import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Home from '../pages/home/Home'
import Signup from '../pages/singup/Singup'
import Coordinate from '../pages/account/Coordinate'
import PreferencePlayer from '../pages/account/PreferencePlayer'
import OrderHistory from '../pages/account/OrderHistory'
import OrderDetailHistory from '../pages/account/OrderDetailHistory'
import Stringing from '../pages/stringing/Stringing'
import String from '../pages/shop/String'
import Ball from '../pages/shop/Ball'
import Accessories from '../pages/shop/Accessories'
import ProductStringPage from '../pages/shop/ProductStringPage'
import ProductBallPage from '../pages/shop/ProductBallPage'
import ProductAccessoriesPage from '../pages/shop/ProductAccessoriesPage'
import Cart from '../pages/cart/Cart'
import ErrorPage from '../pages/errorPage/ErrorPages'
import Order from '../pages/order/order'
import ResetPassword from '../pages/resetPassword/ResetPassword'
import SingnupHub from '../pages/singup/SingupHub'
import SingnupStringer from '../pages/singup/SingupStringer'
import SuccesPaiement from '../pages/afterPaiement/SuccesPaiement'
import EchecPaiement from '../pages/afterPaiement/EchecPaiement'
import OrderPassed from '../pages/orderPassed/OrderPassed'
import OrderDetailForStringer from '../pages/stringer/OrderDetailForStringer'
import RacquetToTake from '../pages/stringer/RacquetToTake'
import RacquetToString from '../pages/stringer/RacquetToString'
import RacquetReady from '../pages/stringer/RacquetReady'
import HistoryOrderStringer from '../pages/stringer/historyOrderStringer'
import CoordinatePlayer from '../pages/stringer/CoordinatePlayer'


export default function Router() {


  return (

    <BrowserRouter scrollBehavior="smooth">
      
      <ScrollToTop />
      <Header />

      <Routes >

          <Route path='/' element={<Home />} />     
          <Route path='/inscription'  element = {< Signup/>} />
          <Route path='/inscription-hub'  element = {< SingnupHub/>} />
          <Route path='/inscription-cordeur'  element = {< SingnupStringer/>} />
          <Route path='/cordez'  element = {<Stringing />} />
          <Route path='/cordages'  element = {<String />} />
          <Route path="/fiche_produit/cordage/:productId"  element = {<ProductStringPage />} />
          <Route path='/balles'  element = {<Ball />} />
          <Route path="/fiche_produit/balle/:productId"  element = {<ProductBallPage />} />
          <Route path='/accessoires'  element = {<Accessories />} />
          <Route path="/fiche_produit/accessoire/:productId"  element = {<ProductAccessoriesPage />} />
          <Route path='/panier'  element = {< Cart/>} />
          <Route path='/coordonnées'  element = {< Coordinate/>} />
          <Route path='/commande'  element = {< Order/>} />
          <Route path='/préférences_joueur'  element = {< PreferencePlayer/>} />
          <Route path='/historique_commandes' element={<OrderHistory />} />
          <Route path='/historique_commandes/:orderId' element={<OrderDetailHistory />} />
          <Route path="/passwordReset/:token/:id" element={<ResetPassword />} />
          <Route path='/paiement-accepte'  element = {< SuccesPaiement/>} />
          <Route path='/paiement-refuse'  element = {< EchecPaiement/>} />
          <Route path='/commande-passé'  element = {< OrderPassed/>} />
          <Route path='/*' element={<ErrorPage />} />

          <Route path='/cordeur_raquettes-à-retirer'  element = {< RacquetToTake/>} />
          <Route path='/cordeur_raquettes-à-corder'  element = {< RacquetToString/>} />
          <Route path='/cordeur_raquettes-prête'  element = {< RacquetReady/>} />
          <Route path='/cordeur_commandes-historique'  element = {< HistoryOrderStringer/>} />
          <Route path='/détails_commande/:orderId' element={<OrderDetailForStringer />} />
          <Route path='/fiche_joueur/:userId' element={<CoordinatePlayer />} />


      </Routes>

      <Footer/>

    </BrowserRouter>

  )
}


