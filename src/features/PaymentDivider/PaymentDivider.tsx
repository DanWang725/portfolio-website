// for each payee, split amount paid by 4, add to others

import { useState } from 'react';
import usePaymentDivider, { Payment } from './hooks/usePaymentDivider';
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
} from '@mui/material';
import { GiTrashCan } from 'react-icons/gi';

// list of unique payees
// track payments done by each payee
// combine each owes for each payee to other payees.
const PaymentDivider: React.FC = () => {
  const [payees, setPayees] = useState<string[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  const [newPayeeName, setNewPayeeName] = useState('');

  const payeePayments = usePaymentDivider(payees, payments);

  const [selectedPayee, setSelectedPayee] = useState('');
  const [selectedPayeeAmount, setSelectedPayeeAmount] = useState(0);

  const handleAddNewPayee = (name: string) => {
    if (name === '') {
      return;
    }
    if (!payees.find((p) => p === name)) {
      setPayees([...payees, name]);
      setNewPayeeName('');
    }
  };

  const handleAddPayment = (payee: string, amount: number) => {
    if (amount <= 0) {
      return;
    }
    const newPayment: Payment = { payee, amount };
    setPayments([...payments, newPayment]);
    setSelectedPayee('');
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
      <Box display="flex" flexDirection="column">
        <Typography>Add Payment</Typography>
        <Grid2 container gap={1}>
          <Grid2 size={4}>
            <Select
              fullWidth
              value={selectedPayee}
              onChange={(e) => setSelectedPayee(e.target.value as string)}
            >
              {payees.map((p) => (
                <MenuItem value={p}>{p}</MenuItem>
              ))}
            </Select>
          </Grid2>
          <Grid2 size={4}>
            <Input
              type="number"
              fullWidth
              onChange={(e) =>
                setSelectedPayeeAmount(Number.parseFloat(e.target.value))
              }
              value={selectedPayeeAmount}
            ></Input>
          </Grid2>
          <Grid2 size={1}>
            <Button
              onClick={() =>
                handleAddPayment(selectedPayee, selectedPayeeAmount)
              }
            >
              Add Payment
            </Button>
          </Grid2>
        </Grid2>
      </Box>
      <Typography>Paid</Typography>
      <Grid2 container gap={2} mb="1rem" direction="column">
        {payees.map((payee) => (
          <Grid2
            size={
              payments.filter((payment) => payment.payee === payee).length + 1
            }
          >
            <Typography>{payee}</Typography>
            <Divider />
            {payments
              .filter((payment) => payment.payee === payee)
              .map((payment) => (
                <Box display="flex" alignItems="center">
                  <Typography>${payment.amount}</Typography>
                  <IconButton>
                    <GiTrashCan
                      onClick={() => handleRemovePayment(payment)}
                    ></GiTrashCan>
                  </IconButton>
                </Box>
              ))}
          </Grid2>
        ))}
      </Grid2>
      <Divider />
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
