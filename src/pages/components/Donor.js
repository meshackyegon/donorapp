import React from 'react';
import { donate } from '../../services/api/donor.php';

function Donor() {
  const handleDonation = async (amount) => {
    await donate(amount);
    alert(`Donation of $${amount} successful!`);
  };

  return (
    <div>
      <h2>Donor Dashboard</h2>
      <button onClick={() => handleDonation(50)}>Donate $50</button>
      <button onClick={() => handleDonation(100)}>Donate $100</button>
    </div>
  );
}

export default Donor;
