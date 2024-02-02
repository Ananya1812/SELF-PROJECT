function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100;
  const loanTerm = parseFloat(document.getElementById("loanTerm").value);

  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  const totalPayment = monthlyPayment * numberOfPayments;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(
    2
  )}<br>Total Payment: $${totalPayment.toFixed(2)}`;
}
