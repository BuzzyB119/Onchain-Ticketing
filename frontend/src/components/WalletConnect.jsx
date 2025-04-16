import { ConnectWallet } from '@coinbase/onchainkit/wallet';

function WalletConnect() {
  return (
    <div className="p-4 bg-blue-600 text-white flex justify-end">
      <ConnectWallet />
    </div>
  );
}

export default WalletConnect;