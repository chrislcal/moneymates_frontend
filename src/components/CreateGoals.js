import { useState } from "react";
import { useHistory } from "react-router-dom";


const CreateGoals = () => {
  const user1_accounts = {
    account: {
      resourceId: "NOJffjkfnwnDJF",
      iban: "NO27234583855390",
      bban: "65244386240",
      currency: "NOK",
      ownerName: "OLA NORDMANN",
      product: "BRUKSKONTO",
      status: "enabled",
      bic: "NDEANOKK",
    },
  };

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

  const user1_transactions = {
    transactions: {
      booked: [
        {
          transactionId: "000000002428846284",
          entryReference: "0000000022i4uy52338",
          bookingDate: "2023-02-03",
          valueDate: "2023-02-03",
          transactionAmount: {
            amount: "-129.00",
            currency: "NOK",
          },
          remittanceInformationUnstructured:
            "658067868903 0202,NORMAL DRAMMEN GULDLISTEN 3 DRAMMEN",
          remittanceInformationStructured:
            "658067868903 0202,NORMAL DRAMMEN GULDLISTEN 3 DRAMMEN",
          additionalInformation: "Varekjøp",
          internalTransactionId: "89dbfde7a7814f28dbefjdjsh384jb98",
        },
        {
          transactionId: "000000002247382337",
          entryReference: "000000002425888337",
          bookingDate: "2023-02-03",
          valueDate: "2023-02-03",
          transactionAmount: {
            amount: "-79.60",
            currency: "NOK",
          },
          remittanceInformationUnstructured:
            "658067868888 0202,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
          remittanceInformationStructured:
            "658033338903 0202,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
          additionalInformation: "Varekjøp",
          internalTransactionId: "34703734ae805j335af8fefh342f274e4",
        },
        {
          transactionId: "000000002428555336",
          entryReference: "000000002422242336",
          bookingDate: "2023-02-03",
          valueDate: "2023-02-03",
          transactionAmount: {
            amount: "-18.90",
            currency: "NOK",
          },
          remittanceInformationUnstructured:
            "658065928903 0302,JOKER DRAMMEN T DRAMMEN STAS DRAMMEN",
          remittanceInformationStructured:
            "655837868903 0302,JOKER DRAMMEN T DRAMMEN STAS DRAMMEN",
          additionalInformation: "Overførsel",
          internalTransactionId: "460a1750657jhg35f083eb159a3bf054a",
        },
        {
          transactionId: "0000000024250255352947",
          entryReference: "0000000024235022947",
          bookingDate: "2023-01-31",
          valueDate: "2023-01-31",
          transactionAmount: {
            amount: "838.00",
            currency: "NOK",
          },
          debtorName: "KIWI 570 GULSKO GULDLISTEN 3",
          remittanceInformationUnstructured: "NAV",
          remittanceInformationStructured: "NAV",
          additionalInformation: "Varekjøp",
          internalTransactionId: "511c120418dcfdnfk345dc11bf329e5086c",
        },
        {
          transactionId: "0000543853422443133",
          entryReference: "00000000245i3i5133",
          bookingDate: "2023-01-30",
          valueDate: "2023-01-30",
          transactionAmount: {
            amount: "-25.00",
            currency: "NOK",
          },
          remittanceInformationUnstructured:
            "Se spesifikasjoner på kontoutskrift ved månedslutt,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
          remittanceInformationStructured:
            "Se spesifikasjoner på kontoutskrift ved månedslutt,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
          additionalInformation: "Overførsel",
          internalTransactionId: "738aa5efefef55aa1e05bef57ff6fa32",
        },
      ],
      pending: [],
    },
  };

  const [selectedAccount, setSelectedAccount] = useState(
    user1_accounts.account.product
  );

  const history = useHistory();
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");

  function handleClick() {
    history.push("/GoalsDisplay");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
      <br></br>
      <input
        type="text"
        placeholder="Name"
        style={{
          height: "20px",
          width: "200px",
          margin: "auto",
          backgroundColor: "lightgray",
        }}
        onChange={(e) => setGoalName(e.target.value)}
      ></input>
      <br></br>
      <textarea
        type="text"
        placeholder="Description"
        style={{
          height: "100px",
          width: "200px",
          margin: "auto",
          backgroundColor: "lightgray",
        }}
        onChange={(e) => setGoalDescription(e.target.value)}
      ></textarea>
      <br></br>
      <select
        value={selectedAccount}
        onChange={(e) => setSelectedAccount(e.target.value)}
        style={{ height: "20px", width: "200px", margin: "auto" }}
      >
        <option value={user1_accounts.account.product}>
          {user1_accounts.account.product}
        </option>
      </select>
      <br></br>
      <input
        type="number"
        placeholder="amount"
        style={{
          height: "20px",
          width: "200px",
          margin: "auto",
          backgroundColor: "lightgray",
        }}
      ></input>
      <br></br>
      <button
        type="button"
        style={{
          margin: "auto",
          borderRadius: "90px",
          backgroundColor: "lightblue",
          width: "200px",
          height: "50px",
        }}
        onClick={handleClick}
      >
        Create Goal
      </button>
    </div>
  );
};

export default CreateGoals;
