document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneQuantity = phoneQuantityUpdate(true);
    updatePhoneTotalPrice(newPhoneQuantity);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneQuantity = phoneQuantityUpdate(false);
    updatePhoneTotalPrice(newPhoneQuantity);
    calculateSubTotal();
  });
