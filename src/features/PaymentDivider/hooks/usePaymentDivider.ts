export interface Payment {
  payee: string;
  amount: number;
}

export interface PayeePayments {
  payee: string;
  owes: Payment[];
}

const usePaymentDivider = (payees: string[], payments: Payment[]) => {
  const accumulatedPayments = payees.reduce<{ [key: string]: number }>(
    (acc, curPayee) => {
      const paid = payments
        .filter((p) => p.payee === curPayee)
        .reduce((sum, cur) => sum + cur.amount, 0);
      acc[curPayee] = paid;
      return acc;
    },
    {},
  );

  const numPayees = payees.length;
  const payeePayments = payees.reduce<PayeePayments[]>((list, curPayee) => {
    const amountReceived = accumulatedPayments[curPayee];
    //calculate how much this payee needs to pay, minus the amount owed back.
    const paymentsOwed: Payment[] = payees.reduce<Payment[]>(
      (payeesOwed, curPayeeOwed) => {
        if (curPayee === curPayeeOwed) return payeesOwed;
        const amountOwed = accumulatedPayments[curPayeeOwed];
        const amountDifference = amountOwed - amountReceived;
        if (amountDifference > 0) {
          return [
            ...payeesOwed,
            { payee: curPayeeOwed, amount: amountDifference / numPayees },
          ];
        }
        return payeesOwed;
      },
      [],
    );
    const payeePayment: PayeePayments = { payee: curPayee, owes: paymentsOwed };
    return [...list, payeePayment];
  }, []);

  return payeePayments;
};
export default usePaymentDivider;
