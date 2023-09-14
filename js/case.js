document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseQuantity = caseQuantityUpdate(true);
  updateCaseTotalPrice(newCaseQuantity);
  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseQuantity = caseQuantityUpdate(false);
    updateCaseTotalPrice(newCaseQuantity);
    calculateSubTotal();
  });
