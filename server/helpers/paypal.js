const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZZI0ifcOeP4idwoOyIlHqNsoejRtQOg-fNpzpT5Vb1akzfR82VPjEd14r_jEhqJmPncdi6Y31a8y2-i",
  client_secret: "EBx0F1iYRttodCl2KdyDJF-rikYS7r61fXkJ2Efp7vJsZ4Q0L8fwkMOH-8yssWZUWX5_6N5eVwW2eE8W",
});

module.exports = paypal;
