document.getElementById('copy').addEventListener('click', () => {
  const contract = document.getElementById('contract').innerText;
  navigator.clipboard.writeText(contract);
  alert('Contract address copied to clipboard!');
});

// Fetch Live Price from CoinGecko
fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.getElementById('price').innerText = `Current Price: $${data.tether.usd} USD`;
  })
  .catch(() => {
    document.getElementById('price').innerText = 'Unable to load live price.';
  });
