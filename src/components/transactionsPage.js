// import { useState, useEffect } from "react";

// const transactionsPage = () => {
//   const [category, setCategory] = useState(null);
//   const [transactions, setTransactions] = useState(null);
//   const [filteredTransactions, setFilteredTransactions] = useState(null);

  
//   const data = {
//     booked: [
//       {
//         transactionId: "000000002430927286",
//         entryReference: "000000002430927286",
//         bookingDate: "2023-02-06",
//         valueDate: "2023-02-06",
//         transactionAmount: {
//           amount: "-285.47",
//           currency: "NOK",
//         },
//         remittanceInformationUnstructured:
//           "658067868903 0402,REMA GULSKOGEN PROFESSOR SM DRAMMEN",
//         remittanceInformationStructured:
//           "658067868903 0402,REMA GULSKOGEN PROFESSOR SM DRAMMEN",
//         additionalInformation: "Overførsel",
//         internalTransactionId: "fe136aee23c531b0fe0a66e7dd3a021c",
//       },
//       {
//         transactionId: "000000002428862338",
//         entryReference: "000000002428862338",
//         bookingDate: "2023-02-03",
//         valueDate: "2023-02-03",
//         transactionAmount: {
//           amount: "-129.00",
//           currency: "NOK",
//         },
//         remittanceInformationUnstructured:
//           "658067868903 0202,NORMAL DRAMMEN GULDLISTEN 3 DRAMMEN",
//         remittanceInformationStructured:
//           "658067868903 0202,NORMAL DRAMMEN GULDLISTEN 3 DRAMMEN",
//         additionalInformation: "Overførsel",
//         internalTransactionId: "89dbfde7a7814f28dbe0564ddaf71b98",
//       },
//       {
//         transactionId: "000000002428862337",
//         entryReference: "000000002428862337",
//         bookingDate: "2023-02-03",
//         valueDate: "2023-02-03",
//         transactionAmount: {
//           amount: "-79.60",
//           currency: "NOK",
//         },
//         remittanceInformationUnstructured:
//           "658067868903 0202,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
//         remittanceInformationStructured:
//           "658067868903 0202,KIWI 570 GULSKO GULDLISTEN 3 DRAMMEN",
//         additionalInformation: "Overførsel",
//         internalTransactionId: "34703734ae807dc5af8feb7e92f274e4",
//       },
//     ],
//   };

//   useEffect(() => {
//     setTransactions(data);
//     setFilteredTransactions(filtered(data, category));
//   }, []);

//   ///////////Function for filtering by category/////////////////7

//   const filtered = (array, category) => {

//     if(category == 'groceries') {
//         const groceries = ["KIWI", "REMA"]

//         for(let name of groceries) {
//         const filtered = array.booked.filter((transaction) => {
//             return transaction.remittanceInformationStructured == name;
//         }).map((item) => {
//             return {
//                 category: category,
//                 name: item.name,
//                 amount: item.transactionAmount.value, 
//                 currency: item.transactionAmount.currency,
//                 date: item.bookingDate
//             }
//         })
//             return filtered;
//   }
//     } else if(category == 'clothes') {
//         const clothes = ["CUBUS", "H&M"]

//         for(let name of clothes) {
//         const filtered = array.booked.filter((transaction) => {
//             return transaction.remittanceInformationStructured == name;
//         }).map((item) => {
//             return {
//                 category: category,
//                 name: item.name,
//                 amount: item.transactionAmount.value, 
//                 currency: item.transactionAmount.currency,
//                 date: item.bookingDate
//             }
//         })
//             return filtered;
//   }
    
//   //////////////////////////////////////////////////////////////////////////////



//   return (
//     <div>
//       <button id="groceries" onClick={() => setCategory(id)}>
//         Groceries
//       </button>
//       <button id="clothes" onClick={() => setCategory(id)}>
//         Clothes
//       </button>
//     </div>
//   );
// };

// export default transactionsPage;
