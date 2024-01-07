import React, { createContext, useState } from 'react';
import axios from 'axios';

export const BettingContext = createContext();

export const BettingContextProvider = ({ children }) => {
  const [betHistory, setBetHistory] = useState([]);
  const [preferences, setPreferences] = useState({});

  const updateBetHistory = async (betDetails) => {
    const { data } = await axios.post('/live-odds/bet', { betDetails });
    setBetHistory(data.bets);
  };

  const getBetHistory = async () => {
    const { data } = await axios.get('/live-odds/my-bets');
    setBetHistory(data.bets);
  };

  const updatePreferences = async (newPreferences) => {
    await axios.post('/user-preferences/set-preferences', newPreferences);
    setPreferences(newPreferences);
  };

  const getPreferences = async () => {
    const { data } = await axios.get('/user-preferences/get-preferences');
    setPreferences(data.preferences);
  };

  return (
    <BettingContext.Provider value={{ betHistory, updateBetHistory, getBetHistory, preferences, updatePreferences, getPreferences }}>
      {children}
    </BettingContext.Provider>
  );
};
