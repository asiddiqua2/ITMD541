const billTotal = document.getElementById('billTotal');
const tipPercentage = document.getElementById('tipPercentage');
const tipPercentageValue = document.getElementById('tipPercentageValue');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');

billTotal.addEventListener('input', calculateTip);
tipPercentage.addEventListener('input', calculateTip);

function calculateTip() {
  const bill = parseFloat(billTotal.value) || 0;
  const tip = parseFloat(tipPercentage.value) || 0;
  const tipPercentageDisplay = `${tip}%`;

  const tipAmountValue = bill * (tip / 100);
  const totalBillValue = bill + tipAmountValue;

  tipPercentageValue.textContent = tipPercentageDisplay;
  tipAmount.textContent = `$${tipAmountValue.toFixed(2)}`;
  totalBill.textContent = `$${totalBillValue.toFixed(2)}`;
}