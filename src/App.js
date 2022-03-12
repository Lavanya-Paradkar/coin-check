import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BitChart from './Components/Chart/BitChart';
import CoinChart from './Components/Chart/CoinChart';
import Calculator from './Components/Calculator.js/Calculator';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.js/Header';
import Homepage from './Components/Homepage.js/Homepage';
import Information from './Components/Information/Information';
import MobileOptions from './Components/Header.js/MobileOptions/MobileOptions';
import { useState } from 'react';

function App() {
  
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/calculator'>
            <Header openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <MobileOptions openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <Calculator/>
          </Route>
          <Route path='/chart'>
            <Header openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <MobileOptions openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <BitChart/>
            <CoinChart/>
          </Route>
          <Route path='/'>
            <Header openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <MobileOptions openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
            <Homepage/>
            <Information/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
