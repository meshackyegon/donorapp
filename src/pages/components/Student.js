import React, { useState } from 'react';
import { requestMoney, transferMoney } from '../../services/api/student';

function Student() {
  const [requestedAmount, setRequestedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);

  const handleRequestMoney = async () => {
    await requestMoney(requestedAmount);
    alert(`Money request of $${requestedAmount} sent!`);
  };

  const handleTransferMoney = async () => {
    await transferMoney('peerStudentId', transferAmount);
    alert(`Transferred $${transferAmount} to peerStudentId!`);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <label>
        Request Money:
        <input type="number" value={requestedAmount} onChange={(e) => setRequestedAmount(e.target.value)} />
        <button onClick={handleRequestMoney}>Request</button>
      </label>
      <br />
      <label>
        Transfer Money:
        <input type="number" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
        <button onClick={handleTransferMoney}>Transfer</button>
      </label>
    </div>
  );
}

export default Student;
