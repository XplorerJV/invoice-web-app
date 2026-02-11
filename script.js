function generateInvoice() {

  // Consignee
  document.getElementById("outShipName").innerText =
    document.getElementById("shipName").value;

  document.getElementById("outShipAddress").innerText =
    document.getElementById("shipAddress").value;

  document.getElementById("outShipGST").innerText =
    document.getElementById("shipGST").value;


  // Buyer
  document.getElementById("outBuyerName").innerText =
    document.getElementById("buyerName").value;

  document.getElementById("outBuyerAddress").innerText =
    document.getElementById("buyerAddress").value;

  document.getElementById("outBuyerGST").innerText =
    document.getElementById("buyerGST").value;


  // Invoice Meta
  document.getElementById("outInvNo").innerText =
    document.getElementById("invoiceNo").value;

  document.getElementById("outDate").innerText =
    document.getElementById("invoiceDate").value;

  document.getElementById("outDelivery").innerText =
    document.getElementById("deliveryNote").value;

  document.getElementById("outPayment").innerText =
    document.getElementById("paymentMode").value;


  // Item Inputs
  let desc = document.getElementById("itemDesc").value;
  let qty = parseFloat(document.getElementById("itemQty").value) || 0;
  let rate = parseFloat(document.getElementById("itemRate").value) || 0;

  let discount = parseFloat(document.getElementById("discount").value) || 0;
  let extra = parseFloat(document.getElementById("extraCharge").value) || 0;
  let buyback = parseFloat(document.getElementById("buyback").value) || 0;

  let gstPercent = parseFloat(document.getElementById("gstPercent").value);

  // Calculations
  let baseAmount = qty * rate;
  let taxable = baseAmount - discount + extra - buyback;

  let gstAmount = taxable * (gstPercent / 100);
  let cgst = gstAmount / 2;
  let sgst = gstAmount / 2;

  let total = taxable + gstAmount;

  // Output Updates
  document.getElementById("outItem").innerText = desc;
  document.getElementById("outQty").innerText = qty;
  document.getElementById("outRate").innerText = rate;
  document.getElementById("outAmt").innerText = baseAmount.toFixed(2);

  document.getElementById("outDiscount").innerText = discount.toFixed(2);
  document.getElementById("outExtra").innerText = extra.toFixed(2);
  document.getElementById("outBuyback").innerText = buyback.toFixed(2);

  document.getElementById("taxableValue").innerText = taxable.toFixed(2);
  document.getElementById("cgstVal").innerText = cgst.toFixed(2);
  document.getElementById("sgstVal").innerText = sgst.toFixed(2);
  document.getElementById("totalTax").innerText = gstAmount.toFixed(2);

  document.getElementById("outTotal").innerText = total.toFixed(2);
}


/* DARK MODE */
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};


/* LIVE AUTO UPDATE */
document.querySelectorAll("input, textarea, select").forEach((field) => {
  field.addEventListener("input", generateInvoice);
});

generateInvoice();

function printInvoice() {
  window.print();
}
