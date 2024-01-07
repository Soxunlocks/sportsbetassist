import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import io from 'socket.io-client';
import './LiveOdds.css'; // Contains CSS styles for LiveOdds component

const LiveOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const socket = io('/live-odds');
    socket.on('update-live-odds', (data) => {
      setOdds(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div id="live-odds">
      <h2>Live Odds</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Event</th>
            <th>Participants</th>
            <th>Odds</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {odds.map((odd, index) => (
            <tr key={index}>
              <td>{odd.eventName}</td>
              <td>{odd.participants.join(', ')}</td>
              <td>{JSON.stringify(odd.odds)}</td>
              <td>{odd.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LiveOdds;
