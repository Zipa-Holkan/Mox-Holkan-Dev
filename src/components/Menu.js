// Menu.js
import React from 'react';
import './ComponentStyles.css';

const Menu = ({ setActiveModal }) => {
  return (
    <div>
      <button onClick={() => setActiveModal('stake')}>Stake</button>
      <button onClick={() => setActiveModal('bet')}>Bet</button>
      <button onClick={() => setActiveModal('voting')}>Voting</button>
    </div>
  );
};

export default Menu;
