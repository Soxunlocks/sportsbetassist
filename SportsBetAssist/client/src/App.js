import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import LiveOdds from './components/LiveOdds/LiveOdds';
import BettingAdvice from './components/BettingAdvice/BettingAdvice';
import Footer from './components/Footer/Footer';
import { BettingContextProvider } from './contexts/BettingContext';

const App = () => {
  return (
    <BettingContextProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <LiveOdds />
          <BettingAdvice />
        </div>
        <Footer />
      </div>
    </BettingContextProvider>
  );
};

export default App;
