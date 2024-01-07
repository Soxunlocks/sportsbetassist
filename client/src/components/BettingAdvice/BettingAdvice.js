import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { BettingContext } from '../../contexts/BettingContext';

const BettingAdvice = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const { preferences, updatePreferences } = useContext(BettingContext);

  const requestBettingAdvice = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/advice', { /* INSERT_REQUIRED Data for the advice request */ });
      setAdvice(res.data.advice);
      setLoading(false);
    } catch (error) {
      setAdvice('Could not fetch betting advice at the moment.');
      setLoading(false);
    }
  };

  return (
    <div id="betting-advice">
      <h2>Betting Advice</h2>
      <Button variant="primary" onClick={requestBettingAdvice} disabled={loading}>
        Get Advice
      </Button>
      {advice && (
        <Card>
          <Card.Body>{advice}</Card.Body>
        </Card>
      )}
    </div>
  );
};

export default BettingAdvice;
