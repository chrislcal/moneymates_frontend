import ProgressBar from "./ProgressBar";


const GoalsDisplay = (props) => {


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

  const goalName = props.goalName;
  const goalDescription = props.goalDescription;
  const { amount } = user1_balances.balances[0].balanceAmount;
  const balance = parseFloat(amount.replace(",", "."));
  const totalAmount = 20000;
  const percentage = (balance / totalAmount) * 100;
  const testData =
    { bgcolor: "#5D1788", completed: percentage };



  return (
    <div style={{}}>
      <h1 style={{ margin: "auto" }}>={goalName}</h1>
      <p style={{ margin: "auto" }}>{goalDescription}</p>
      <div className="progress-bar">
        <ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
      </div>
    </div>
  );
};

export default GoalsDisplay;
