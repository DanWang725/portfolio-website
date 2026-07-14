// for each payee, split amount paid by 4, add to others

import { useState } from "react";
import usePaymentDivider, { Payment } from "./hooks/usePaymentDivider";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { GiTrashCan } from "react-icons/gi";
import { Person } from "@mui/icons-material";
import PayeeInput from "./components/PayeeInput";

// list of unique payees
// track payments done by each payee
// combine each owes for each payee to other payees.
const PaymentDivider: React.FC = () => {
  const [payees, setPayees] = useState<string[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  const [newPayeeName, setNewPayeeName] = useState("");

  const payeePayments = usePaymentDivider(payees, payments);

  const [selectedPayee, setSelectedPayee] = useState("");
  const [selectedPayeeAmount, setSelectedPayeeAmount] = useState(0);

  const handleAddNewPayee = (name: string) => {
    if (name === "") {
      return;
    }
    if (!payees.find((p) => p === name)) {
      setPayees([...payees, name]);
      setNewPayeeName("");
    }
  };

  const handleAddPayment = (payee: string, amount: number) => {
    if (amount <= 0) {
      return;
    }
    const newPayment: Payment = { payee, amount };
    setPayments([...payments, newPayment]);
    setSelectedPayee("");
    setSelectedPayeeAmount(0);
  };

  const handleRemovePayment = (payment: Payment) => {
    const paymentIndex = payments.findIndex((pm) => pm == payment);
    setPayments(payments.filter((_, idx) => idx != paymentIndex));
  };

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Input
          onChange={(e) => setNewPayeeName(e.target.value)}
          value={newPayeeName}
        />
        <Button onClick={() => handleAddNewPayee(newPayeeName)}>
          Add Payee
        </Button>
      </Box>

      <Grid2 container spacing={2} mt="1rem" mb="1rem" direction="row">
        {payees.map((payee) => (
          <PayeeInput
            payee={payee}
            payments={payments.filter((payment) => payment.payee == payee)}
            handleAddPayment={(amount) => handleAddPayment(payee, amount)}
            handleRemovePayment={handleRemovePayment}
          />
        ))}
      </Grid2>
      {payments.length != 0 && (
        <Grid2 container gap={2}>
          {payeePayments.map((payee) => (
            <Grid2 size={5}>
              <Typography>{payee.payee} Owes</Typography>
              <Divider />
              {payee.owes.map((payment) => (
                <Typography>
                  {payment.payee}: ${payment.amount}
                </Typography>
              ))}
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
};

export default PaymentDivider;
