import React from 'react';
import { observer } from 'mobx-react-lite'
import './App.css';
import Header from './Components/Headers/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import MenuKafe from './Components/MenuKafe/MenuKafe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './Components/Content/Modal/Modal';
import DetalisItemsMenu from './Components/MenuKafe/MenuKafeComponent/DetalisItemsMenu';
import BasketComponent from './BasketComponents/BasketComponent';
import myState from '../src/Store/Store'
import BasketStore from '../src/Store/Basket'
import ModalComponent from './Components/Content/ComponentContent/ModalComponent';
import ModalDataComponent from './Components/Content/ComponentContent/ModalDataComponent';
import OrderSurveyModal from './Components/Content/ComponentContent/OrderSurveyModal';
import Review from './Components/Reviews/Review';
import Misstake from './Components/Misstake';



function App() {



  return (
    <Router>
      <div className='h-min w-full p-0 relative' >
        <Header />
        <Routes>
          <Route path='/Menu' element={<MenuKafe />} />
          <Route path='/' element={<Content />} />
          <Route path='/Reviews' element={<Review />} />
        </Routes>
        {myState.misstakeIsOpen?<Misstake />:''}
        {myState.isOpenDetalis ? <Modal children={<DetalisItemsMenu />} /> : ""}
        {BasketStore.basketIsOpen ? <Modal children={<BasketComponent />} /> : ""}
        {myState.isOpen ? <Modal children={<ModalComponent />} /> : ""}
        {myState.registratonIsOpen ? <Modal children={<ModalDataComponent />} /> : ""}
        {myState.orderSurveyisOpen ? <Modal children={<OrderSurveyModal />} /> : ""}
        <Footer />
      </div>
    </Router>
  );
}

export default observer(App);
