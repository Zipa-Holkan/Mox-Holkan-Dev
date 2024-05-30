// StakeModal.js
import React, { useState } from 'react';
import './ComponentStyles.css'; // Estilos del modal

const StakeModal = ({ closeModal }) => {
  const [amount, setAmount] = useState('');
  const [isDeposited, setIsDeposited] = useState(false);

  const handleDeposit = () => {
    if (amount.trim() === '') {
      alert('Please enter an amount.');
      return;
    }
    setIsDeposited(true);
  };

  const handleWithdraw = () => {
    setIsDeposited(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Stake Mox Coin</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        {!isDeposited ? (
          <button onClick={handleDeposit}>Deposit</button>
        ) : (
          <button onClick={handleWithdraw}>Withdraw</button>
        )}
        <button onClick={closeModal}>Close</button> {/* Agregar botón para cerrar el modal */}
      </div>
    </div>
  );
};

export default StakeModal;
