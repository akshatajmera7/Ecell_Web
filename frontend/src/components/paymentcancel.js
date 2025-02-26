import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PaymentCancelled() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <Ban className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Payment Cancelled</h2>
        <p className="text-gray-600 mb-6">Your transaction has been cancelled. If this was a mistake, you can try again.</p>
      </div>
    </div>
  );
}

export default PaymentCancelled;