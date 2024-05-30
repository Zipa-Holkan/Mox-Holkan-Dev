// BetModal.js
import React, { useState } from 'react';
import './ComponentStyles.css'; // Estilos del modal

const BetModal = ({ closeModal }) => {
  const [amount, setAmount] = useState('');
  const [countdown, setCountdown] = useState(30); // Inicializamos el contador en 30 días

  const handleBet = () => {
    if (amount.trim() === '') {
      alert('Please enter an amount.');
      return;
    }
    alert(`Bet placed: ${amount} MOx Coin`);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Bet MOx Coin</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <p>Countdown: {countdown} days</p>
        <button onClick={handleBet}>Bet</button>
        <button onClick={closeModal}>Close</button> {/* Agregar botón para cerrar el modal */}
      </div>
    </div>
  );
};

export default BetModal;