import './App.css';
import React, { useState, useEffect } from 'react';
import { PeraWalletConnect } from "@perawallet/connect";
import StakeModal from './components/StakeModal';
import BetModal from './components/BetModal';
import VotingModal from './components/VotingModal';
import Menu from './components/Menu';

const peraWallet = new PeraWalletConnect();

function App() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts) => {
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
      if (accounts.length) {
        setAccountAddress(accounts[0].slice(-8)); // Solo los últimos 8 caracteres
      }
    }).catch(error => {
      console.log(error);
    });
  }, []);

  function handleConnectWalletClick() {
    peraWallet.connect().then((newAccounts) => {
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
      setAccountAddress(newAccounts[0].slice(-8)); // Solo los últimos 8 caracteres
    }).catch((error) => {
      if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
        console.log(error);
      }
    });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <Menu setActiveModal={setActiveModal} />
      {accountAddress && (
        <button className="green-button" onClick={handleDisconnectWalletClick}>
          Disconnect from Pera Wallet
        </button>
      )}
      {!accountAddress && (
        <button className="connect-button" onClick={handleConnectWalletClick}>
          Connect to Pera Wallet
        </button>
      )}

      {accountAddress && activeModal === 'stake' && <StakeModal closeModal={closeModal} />}
      {accountAddress && activeModal === 'bet' && <BetModal closeModal={closeModal} />}
      {accountAddress && activeModal === 'voting' && <VotingModal closeModal={closeModal} />}
    </div>
  );
}

export default App;

