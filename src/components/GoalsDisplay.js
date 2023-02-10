import { useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const GoalsDisplay = () => {
  const user1_balances = {
    balances: [
      {
        balanceAmount: {
          amount: "9539,50",
          currency: "NOK",
        },
        balanceType: "interimAvailable",
      },
      {
        balanceAmount: {
          amount: "10538,30",
          currency: "NOK",
        },
        balanceType: "interimBooked",
      },
    ],
  };

  const { amount } = user1_balances.balances[0].balanceAmount;
  const balance = parseFloat(amount.replace(",", "."));
  const totalAmount = 20000;
  const percentage = (balance / totalAmount) * 100;

  return (
    <div style={{ width: 200, height: 200,  }}>
      <h1>Her skal det stå navnet på inputfeltet"Navn" </h1>
      <CircularProgressbar
        value={percentage}
        text={`${percentage.toFixed(0)}%`}
      />
      <div>NOK 9539,50/20000</div>
      <div>Account:</div>
      <h1>Ferie</h1>
    </div>
  );
};

export default GoalsDisplay;
