function phoneQuantityUpdate(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneQuantity = parseInt(phoneNumberString);

  let newPhoneQuantity;

  if (isIncrease === true) {
    newPhoneQuantity = previousPhoneQuantity + 1;
  } else {
    newPhoneQuantity = previousPhoneQuantity - 1;
  }
  phoneNumberField.value = newPhoneQuantity;
  return newPhoneQuantity;
}

function updatePhoneTotalPrice(newPhoneQuantity) {
  const phoneTotalPrice = newPhoneQuantity * 1219;
  setTextElementValueById("phone-total", phoneTotalPrice);
}

function caseQuantityUpdate(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseQuantity = parseInt(caseNumberString);

  let newCaseQuantity;

  if (isIncrease === true) {
    newCaseQuantity = previousCaseQuantity + 1;
  } else {
    newCaseQuantity = previousCaseQuantity - 1;
  }
  caseNumberField.value = newCaseQuantity;
  return newCaseQuantity;
}

function updateCaseTotalPrice(newCaseQuantity) {
  const phoneTotalPrice = newCaseQuantity * 59;
  setTextElementValueById("case-total", phoneTotalPrice);
}

function getTextElementValueById(elementId) {
  const itemTotalElement = document.getElementById(elementId);
  const currentItemTotalString = itemTotalElement.innerText;
  const currentItemTotal = parseInt(currentItemTotalString);
  return currentItemTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
