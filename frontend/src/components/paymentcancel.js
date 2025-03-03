import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PaymentCancelled() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <div className="bg-dark p-4 rounded-4 shadow-lg text-center border border-primary" style={{ maxWidth: "400px" }}>
        <div className="d-flex justify-content-center mb-3">
          <Ban size={64} color="gold" />
        </div>
        <h2 className="text-warning fw-bold">Payment Cancelled</h2>
        <p className="text-light">Your transaction was cancelled. If this was a mistake, you can try again.</p>
        <br/>
        <button className="btn btn-primary w-100 fw-bold" onClick={() => navigate("/launchpad/passes")}>Try Again</button>
      </div>
    </div>
  );
}

export default PaymentCancelled;