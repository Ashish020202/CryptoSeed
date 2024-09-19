import { mnemonicToSeed } from 'bip39';
import React, { useState } from 'react'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

const Solanawallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
  return (
    <div>  
      <div className="w-full max-w-lg p-6 bg-slate-700  backdrop-blur-md shadow-lg rounded-lg border border-gray-200">
        <div className="mb-4">
        <button className="px-4 w-40 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all" onClick={function() {
            const seed = mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Add Solana wallet
        </button>
        {publicKeys.map(p => <div>
            {p.toBase58()}
        </div>)}
        </div>
      </div>
    </div>
  )
}

export default Solanawallet
