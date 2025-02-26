import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <div className="bg-dark p-4 rounded-4 shadow-lg text-center border border-primary" style={{ maxWidth: "400px" }}>
        <div className="d-flex justify-content-center mb-3">
          <CheckCircle size={64} color="limegreen" />
        </div>
        <h2 className="text-success fw-bold">Payment Successful</h2>
        <br/>
        <p className="text-light">Your payment has been successfully processed. Thank you for your purchase!</p>
        <br/>
        
        <button className="btn btn-primary w-100" onClick={() => navigate("/launchpad/passes")}>View Passes</button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
