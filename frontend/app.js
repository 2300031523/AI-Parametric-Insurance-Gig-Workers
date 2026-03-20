function register() {
  const name = document.getElementById("name").value;
  alert("Welcome " + name);
}

function calculatePremium() {
  // Mock AI logic
  const risk = Math.random();

  let premium;
  if (risk > 0.7) premium = 120;
  else if (risk > 0.4) premium = 80;
  else premium = 50;

  document.getElementById("premium").innerText =
    "Weekly Premium: ₹" + premium;
}

function triggerClaim() {
  document.getElementById("claim").innerText =
    "Heavy Rain Detected 🌧️ → Claim Approved → ₹500 Credited";
}