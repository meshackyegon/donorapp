const API_BASE_URL = 'http://localhost/php'; 

export const requestMoney = async (requestedAmount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/request-money`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({ amount: requestedAmount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error requesting money:', error);
    throw error;
  }
};

export const transferMoney = async (peerStudentId, transferAmount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transfer-money`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ peerStudentId, amount: transferAmount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error transferring money:', error);
    throw error;
  }
};
