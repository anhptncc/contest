// Function to get input, perform addition, and send result to server
async function sendAdditionResults() {
  let n = gets();

  for (let i = 0; i < n; i++) {
    const arr = gets();

    const payload = { result: arr };

    try {
      const response = await fetch(
        'https://fh1glx5p-3000.asse.devtunnels.ms/api/addition',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Server response:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }

    console.log(result);
  }
}

// Call the function
sendAdditionResults();
