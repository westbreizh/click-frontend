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
import SuccesPaiement from '../pages/afterPaiement/SuccesPaiement'
import EchecPaiement from '../pages/afterPaiement/EchecPaiement'
import OrderPassed from '../pages/orderPassed/OrderPassed'
import OrderDetailForStringer from '../pages/stringer/OrderDetailForStringer'
import RacquetToTake from '../pages/stringer/RacquetToTake'
import RacquetToString from '../pages/stringer/RacquetToString'
import RacquetReady from '../pages/stringer/RacquetReady'
import HistoryOrderStringer from '../pages/stringer/historyOrderStringer'
import CoordinatePlayer from '../pages/stringer/CoordinatePlayer'
import TabTitle from './TabTittle'

export default function Router() {

  return (

    <BrowserRouter scrollBehavior="smooth">
      
      <ScrollToTop />

      <Header />

      <Routes >
        <Route path='/' element={<TabTitle title="Accueil"><Home /></TabTitle>} />  
        <Route path='/inscription'  element = {<TabTitle title="Inscription"><Signup /></TabTitle>} />
        <Route path='/cordez'  element = {<TabTitle title="Cordez"><Stringing /></TabTitle>} />
        <Route path='/cordages'  element = {<TabTitle title="Cordages"><String /></TabTitle>} />
        <Route path="/fiche_produit/cordage/:productId"  element = {<TabTitle title="Fiche produit cordage"><ProductStringPage /></TabTitle>} />
        <Route path='/balles'  element = {<TabTitle title="Balles"><Ball /></TabTitle>} />
        <Route path="/fiche_produit/balle/:productId"  element = {<TabTitle title="Fiche produit balle"><ProductBallPage /></TabTitle>} />
        <Route path='/accessoires'  element = {<TabTitle title="Accessoires"><Accessories /></TabTitle>} />
        <Route path="/fiche_produit/accessoire/:productId"  element = {<TabTitle title="Fiche produit accessoire"><ProductAccessoriesPage /></TabTitle>} />
        <Route path='/panier'  element = {<TabTitle title="Panier"><Cart /></TabTitle>} />
        <Route path='/coordonnées'  element = {<TabTitle title="Coordonnées"><Coordinate /></TabTitle>} />
        <Route path='/commande'  element = {<TabTitle title="Commande"><Order /></TabTitle>} />
        <Route path='/préférences_joueur'  element = {<TabTitle title="Préférences joueur"><PreferencePlayer /></TabTitle>} />
        <Route path='/historique_commandes' element={<TabTitle title="Historique commandes"><OrderHistory /></TabTitle>} />
        <Route path='/historique_commandes/:orderId' element={<TabTitle title="Détails commande"><OrderDetailHistory /></TabTitle>} />
        <Route path="/passwordReset/:token/:id" element={<TabTitle title="Réinitialisation mot de passe"><ResetPassword /></TabTitle>} />
        <Route path='/paiement-accepte'  element = {<TabTitle title="Paiement accepté"><SuccesPaiement /></TabTitle>} />
        <Route path='/paiement-refuse'  element = {<TabTitle title="Paiement refusé"><EchecPaiement /></TabTitle>} />
        <Route path='/commande-passé'  element = {<TabTitle title="Commande passée"><OrderPassed /></TabTitle>} />
        <Route path='/*' element={<TabTitle title="Erreur"><ErrorPage /></TabTitle>} />

        <Route path='/cordeur_raquettes-à-retirer'  element = {<TabTitle title="Raquettes à retirer"><RacquetToTake /></TabTitle>} />
        <Route path='/cordeur_raquettes-à-corder'  element = {<TabTitle title="Raquettes à corder"><RacquetToString /></TabTitle>} />
        <Route path='/cordeur_raquettes-prête'  element = {<TabTitle title="Raquettes prêtes"><RacquetReady /></TabTitle>} />
        <Route path='/cordeur_commandes-historique'  element = {<TabTitle title="Historique des commandes"><HistoryOrderStringer /></TabTitle>} />
        <Route path='/détails_commande/:orderId' element={<TabTitle title="Détails de la commande"><OrderDetailForStringer /></TabTitle>} />
        <Route path='/fiche_joueur/:userId' element={<TabTitle title="Fiche joueur"><CoordinatePlayer /></TabTitle>} />
        
      </Routes>

      <Footer/>

    </BrowserRouter>

  )
}


