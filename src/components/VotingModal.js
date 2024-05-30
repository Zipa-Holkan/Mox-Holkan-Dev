// VotingModal.js
import React, { useState } from 'react';
import './ComponentStyles.css'; // Estilos del modal

const VotingModal = ({ closeModal }) => {
  const [answer, setAnswer] = useState('');

  const handleVote = () => {
    if (answer.trim() === '') {
      alert('Please select an answer.');
      return;
    }
    alert(`Voted: ${answer}`);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Voting</h2>
        <p>Do you want to be a Mox Holkan?</p>
        <label>
          <input
            type="radio"
            value="yes"
            checked={answer === 'yes'}
            onChange={() => setAnswer('yes')}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={answer === 'no'}
            onChange={() => setAnswer('no')}
          />
          No
        </label>
        <button onClick={handleVote}>Vote</button>
        <button onClick={closeModal}>Close</button> {/* Agregar botón para cerrar el modal */}
      </div>
    </div>
  );
};

export default VotingModal;