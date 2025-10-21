document.getElementById("convertBtn").addEventListener("click", async () => {
  const crypto = document.getElementById("crypto").value;
  const fiat = document.getElementById("fiat").value;
  const resultBox = document.getElementById("result");

  resultBox.textContent = "Fetching data...";

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${fiat}`);
    const data = await response.json();

    if (data[crypto] && data[crypto][fiat]) {
      const price = data[crypto][fiat];
      resultBox.textContent = `1 ${crypto.toUpperCase()} = ${price.toLocaleString()} ${fiat.toUpperCase()}`;
    } else {
      resultBox.textContent = "No data available. Try again later.";
    }
  } catch (error) {
    resultBox.textContent = "Error fetching data. Please check your connection.";
  }
});
