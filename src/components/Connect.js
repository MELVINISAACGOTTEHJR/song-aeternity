import React, { useState, useEffect } from 'react';
import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';
import useAeternitySDK from '../hooks/useAeternitySDK';
import Spends from './Spendsample';

const Connect = () => {
  const { aeSdk, connectToWallet, address, networkId, getBalance } = useAeternitySDK();
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });
        setBalance(balance);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [aeSdk,address, getBalance]);

  const handleConnectClick = async () => {
    setIsLoading(true);
    try {
      await connectToWallet();
      console.log(aeSdk);
    } catch (error) {
      if (!(error instanceof Error)) throw error;
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

 

 

  return (
    <div className="container mx-auto mt-8 relative">
			<h1 className='text-lg mb-4 font-bold'><strong>Get me a Coffe </strong></h1>
      {address ? (
        <React.Fragment>
          <p className="text-lg font-semibold mb-4">
            Connected to wallet on network "{networkId}". Address: {address}
          </p>
          <p className="text-lg mb-4">Balance: {balance}</p>

          <Spends instance={aeSdk} />

         
         
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleConnectClick}
            disabled={isLoading}
          >
            {isLoading ? 'Connecting...' : 'Connect to Wallet'}
          </button>
          {isLoading && <p className="mt-4">Connecting...</p>}
        </React.Fragment>
      )}
    </div>
  );
};

export default Connect;