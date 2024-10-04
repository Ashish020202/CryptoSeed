const WalletList = ({ isOpen, onClose, ethWallets, solWallets }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">All Wallets</h2>
        <div>
          <h3 className="text-xl font-bold mb-4">Ethereum Wallets</h3>
          {ethWallets.length > 0 ? (
            ethWallets.map((wallet, index) => (
              <div key={index} className="mb-6 p-6 text-white bg-slate-700 border-b border-gray-300">
                <p><strong>Address:</strong> {wallet.address}</p>
                <p><strong>Private Key:</strong> {wallet.privateKey}</p>
              </div>
            ))
          ) : (
            <p>No Ethereum wallets available</p>
          )}

          <h3 className="text-xl font-bold mt-6 mb-4">Solana Wallets</h3>
          {solWallets.length > 0 ? (
            solWallets.map((wallet, index) => (
              <div key={index} className="mb-6 p-6 bg-slate-700 border-b border-gray-300 text-white">
                <label htmlFor={`publicKey-${index}`}><strong>Public Key:</strong></label>
                <input 
                  type="text" 
                  id={`publicKey-${index}`} 
                  value={wallet.publicKey} 
                  className="w-full mb-2 p-2 rounded-lg bg-gray-900 text-white"
                  readOnly
                />
                <label htmlFor={`privateKey-${index}`}><strong>Private Key:</strong></label>
                <input 
                  type="text" 
                  id={`privateKey-${index}`} 
                  value={wallet.privateKey} 
                  className="w-full p-2 rounded-lg bg-gray-900 text-white"
                  readOnly
                />
              </div>
            ))
          ) : (
            <p>No Solana wallets available</p>
          )}
        </div>
        <button
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WalletList;
