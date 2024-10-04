import { mnemonicToSeed } from 'bip39';
import React, { useState } from 'react';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';
import nacl from 'tweetnacl';


const Solanawallet = ({ mnemonic,addWallet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallet, setWallet] = useState({ publicKey: '', privateKey: '' });
  const [showWallet,setShowWallet] = useState()

  const handleAddWallet = async () => {
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString('hex')).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    const solWallet = {
      publicKey: keypair.publicKey.toBase58(),
      privateKey: Buffer.from(secret).toString("hex"),
    };

    addWallet(solWallet, "sol");
    setCurrentIndex(currentIndex + 1);
  

    
    setWallet({
      publicKey: keypair.publicKey.toBase58(),
      privateKey: Buffer.from(secret).toString('hex'),
    });

  
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="">
      <div className="w-full max-w-lg h-72 px-4 py-6 bg-slate-700 backdrop-blur-md shadow-lg rounded-lg border border-gray-200">
        <div className="mb-4">
          <button
            className="px-4 w-40 py-2 bg-violet-800 text-white rounded hover:bg-violet-950 transition-all"
            onClick={handleAddWallet}
          >
            Add Solana wallet
          </button>
          <div className="text-white my-4">
            <div className="mb-2">
              <label>Public Key</label>
              <input
                className="my-2 p-2 w-full rounded-md bg-slate-400"
                type="text"
                value={wallet.publicKey}
                readOnly
              />
            </div>
            <div className="mb-2">
              <label>Private Key</label>
              <input
                className="my-2 p-2 w-full rounded-md bg-slate-400"
                type="text"
                value={wallet.privateKey}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solanawallet;
