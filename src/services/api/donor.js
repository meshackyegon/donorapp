const API_BASE_URL = 'http://localhost/php'; // Replace with your actual API base URL

export const donate = async (amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/donate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    return responseData; 
  } catch (error) {
    console.error('Error during donation:', error);
    throw error; 
  }
};
