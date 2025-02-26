import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <div className="bg-dark p-4 rounded-4 shadow-lg text-center border border-success" style={{ maxWidth: "400px" }}>
        <CheckCircle className="mb-3" size={64} color="limegreen" />
        <h2 className="text-success fw-bold">Payment Successful</h2>
        <p className="text-light">Your payment has been successfully processed. Thank you for your purchase!</p>
        
       
        <button className="btn btn-secondary w-100" onClick={() => navigate("/launchpad/passes")}>View More Passes</button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
