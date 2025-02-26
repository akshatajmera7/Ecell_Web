import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-6">Something went wrong with your transaction. Please try again.</p>
      </div>
    </div>
  );
}

export default PaymentFailed;
