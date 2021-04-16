import PaymentCard from "./PaymentCard";
import ShipInfoCard from "./ShipInfoCard";
import "./ConfirmationPage.scss";

function ConfirmationPage() {
  return (
    <div className="app">
      <div className="confirm-page-container">
        <h1>Delivering to</h1>
        <div>
          <ShipInfoCard />
        </div>
        <div className="payment-option-card">
          <PaymentCard />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
