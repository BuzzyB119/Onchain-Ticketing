import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { getTransaction, TransactionProvider } from '@coinbase/onchainkit/transaction';
import { baseSepolia } from 'wagmi/chains';

const TICKET_NFT_ADDRESS = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const TICKET_NFT_ABI = []; // Replace with ABI from Step 6

function TicketPurchase() {
  const { id } = useParams();
  const { address } = useAccount();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (!address) {
      alert('Please connect your wallet.');
      return;
    }
    setLoading(true);
    try {
      const calls = Array.from({ length: quantity }, () => ({
        to: TICKET_NFT_ADDRESS,
        data: new ethers.utils.Interface(TICKET_NFT_ABI).encodeFunctionData('mint', [address]),
      }));

      const { hash } = await TransactionProvider.send({
        chainId: baseSepolia.id,
        calls,
      });

      const transaction = await getTransaction({ chainId: baseSepolia.id, hash });
      if (transaction.status === 'success') {
        alert('Tickets purchased and NFTs minted!');
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      console.error('Error purchasing tickets:', error);
      alert('Purchase failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Purchase Tickets for Event {id}</h2>
      <label className="block mb-4">
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="ml-2 border p-1 rounded"
        />
      </label>
      <button
        onClick={handlePurchase}
        disabled={!address || loading}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Buy with BaseETH'}
      </button>
      {!address && (
        <p className="mt-2 text-red-500">Please connect your wallet to purchase tickets.</p>
      )}
    </div>
  );
}

export default TicketPurchase;