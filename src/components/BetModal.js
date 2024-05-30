// BetModal.js
import React, { useState, useEffect } from 'react';
import './ComponentStyles.css'; // Estilos del modal

const BetModal = ({ closeModal }) => {
  const [amount, setAmount] = useState('');
  const [countdown, setCountdown] = useState(30 * 24 * 60 * 60); // Inicializamos el contador en 30 días en segundos
  const [isCounting, setIsCounting] = useState(false); // Estado para controlar si la cuenta regresiva está activa

  useEffect(() => {
    let timer;
    if (isCounting && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000); // Decrementa cada segundo
    } else if (countdown === 0) {
      setIsCounting(false); // Detener la cuenta regresiva cuando llega a cero
    }

    return () => clearInterval(timer);
  }, [isCounting, countdown]);

  const handleBet = () => {
    if (amount.trim() === '') {
      alert('Please enter an amount.');
      return;
    }
    setIsCounting(true); // Iniciar la cuenta regresiva
    alert(`Bet placed: ${amount} MOx Coin`);
  };

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Apuesta Mox Coin</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <p>Countdown: {formatTime(countdown)}</p>
        <button onClick={handleBet}>Bet</button>
        <button onClick={closeModal}>Close</button> {/* Agregar botón para cerrar el modal */}
      </div>
    </div>
  );
};

export default BetModal;