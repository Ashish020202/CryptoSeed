import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const Ethereum = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallet, setWallet] = useState({ address: "", privateKey: "" });

  const handleAddWallet = async () => {
    const seed = await mnemonicToSeed(mnemonic); // Generate seed from mnemonic
    const derivationPath = `m/44'/60'/${currentIndex}'/0/0`; // Derivation path for Ethereum
    const hdNode = HDNodeWallet.fromSeed(seed); // Create HD wallet from seed
    const child = hdNode.derivePath(derivationPath); // Derive a new wallet using the path
    const privateKey = child.privateKey; // Extract private key
    const wallet = new Wallet(privateKey); // Create wallet object with private key

    
    setWallet({ address: wallet.address, privateKey });
    setCurrentIndex(currentIndex + 1); 
  };

  return (
    <div className="w-full max-w-lg h-72 px-4 py-6 bg-slate-700 backdrop-blur-md shadow-lg rounded-lg border border-gray-200">
      <button
        className="px-4 w-40 py-2 bg-violet-800 text-white rounded hover:bg-violet-950 transition-all"
        onClick={handleAddWallet}
      >
        Add ETH wallet
      </button>

      <div className="text-white my-4">
        <div className="mb-2">
          <label>Address</label>
          <input
            className="my-2 p-2 w-full rounded-md bg-slate-400"
            type="text"
            value={wallet.address}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label>Private Key</label>
          <input
            className="my-2 p-2 w-full rounded-md bg-slate-400"
            type="password"
            value={wallet.privateKey}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
