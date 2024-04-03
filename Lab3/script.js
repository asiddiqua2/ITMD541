const billTotal = document.getElementById('billTotal');
const tipPercentage = document.getElementById('tipPercentage');
const tipPercentageValue = document.getElementById('tipPercentageValue');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');

billTotal.addEventListener('input', calculateTip);
tipPercentage.addEventListener('input', calculateTip);

function calculateTip() {
  const billTotalInput = document.getElementById('billTotal').value.trim();
  const billTotalError = document.getElementById('billTotalError');

  // Check if the input is a valid number (integer or float)
  if (billTotalInput === '' || isNaN(parseFloat(billTotalInput))) {
    billTotalError.textContent = 'Please enter a valid number for the bill total.';
    tipAmount.textContent = '$0.00';
    totalBill.textContent = '$0.00';
    return; // Exit the function if the input is invalid
  } else {
    billTotalError.textContent = ''; // Clear the error message if the input is valid
  }

  const bill = parseFloat(billTotalInput) || 0;
  const tip = parseFloat(tipPercentage.value) || 0;
  const tipPercentageDisplay = `${tip}%`;
  const tipAmountValue = bill * (tip / 100);
  const totalBillValue = bill + tipAmountValue;

  tipPercentageValue.textContent = tipPercentageDisplay;
  tipAmount.textContent = `$${tipAmountValue.toFixed(2)}`;
  totalBill.textContent = `$${totalBillValue.toFixed(2)}`;
}