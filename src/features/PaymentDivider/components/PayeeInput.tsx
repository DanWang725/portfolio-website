import {
  Box,
  Divider,
  Grid2,
  IconButton,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import { Payment } from '../hooks/usePaymentDivider';
import { Add, Person } from '@mui/icons-material';
import { GiTrashCan } from 'react-icons/gi';
import { useState } from 'react';

export interface PayeeInputProps {
  payee: string;
  payments: Payment[];
  handleRemovePayment: (payment: Payment) => void;
  handleAddPayment: (amount: number) => void;
}

const PayeeInput: React.FC<PayeeInputProps> = ({
  payee,
  payments,
  handleRemovePayment,
  handleAddPayment,
}) => {
  const [newPaymentAmount, setNewPaymentAmount] = useState<number>(0);
  const submitPayment = () => {
    if (newPaymentAmount && newPaymentAmount > 0) {
      handleAddPayment(newPaymentAmount);
      setNewPaymentAmount(0);
    }
  };
  return (
    <Grid2
      size={4}
      justifyContent={'flex'}
      display={'flex'}
      flexDirection="column"
    >
      <Box alignItems="center" display={'flex'}>
        <Person viewBox="0 0 20 20" />
        <Typography alignSelf="center" ml="1rem" variant="h4">
          {payee}
        </Typography>
        <Typography ml="auto">
          ($
          {payments
            .filter((payment) => payment.payee === payee)
            .reduce((sum, payment) => {
              return payment.amount + sum;
            }, 0)}{' '}
          paid)
        </Typography>
      </Box>
      <Divider />
      {payments
        .filter((payment) => payment.payee === payee)
        .map((payment) => (
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Typography>${payment.amount}</Typography>
            <IconButton>
              <GiTrashCan
                onClick={() => handleRemovePayment(payment)}
              ></GiTrashCan>
            </IconButton>
          </Box>
        ))}
      <Box mt="1rem">
        <TextField
          variant="filled"
          label="Add Payment"
          type="number"
          onChange={(e) =>
            setNewPaymentAmount(
              e.target.value ? Number.parseFloat(e.target.value) : 0,
            )
          }
          onKeyUp={(e) => {
            if (e.key == 'Enter') {
              submitPayment();
            }
          }}
          value={newPaymentAmount > 0 ? newPaymentAmount : ''}
        ></TextField>
        <IconButton
          disabled={newPaymentAmount <= 0}
          onClick={() => {
            submitPayment();
          }}
        >
          <Add />
        </IconButton>
      </Box>
    </Grid2>
  );
};

export default PayeeInput;
