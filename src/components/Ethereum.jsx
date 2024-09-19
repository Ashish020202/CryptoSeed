import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const Ethereum = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div className="w-full max-w-lg p-6 bg-slate-700  backdrop-blur-md shadow-lg rounded-lg border border-gray-200">
            <button className="px-4 w-40 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all" onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 const child = hdNode.derivePath(derivationPath);
                 const privateKey = child.privateKey;
                 const wallet = new Wallet(privateKey);
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>

            {addresses.map(p => <div>
                Eth - {p}
            </div>)}
        </div>
    )
}