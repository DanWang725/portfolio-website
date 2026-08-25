import {
  Box,
  Divider,
  Grid2,
  IconButton,
  Input,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { PayeePayments, Payment } from "../hooks/usePaymentDivider";
import { Add, Person, Remove } from "@mui/icons-material";
import { GiTrashCan } from "react-icons/gi";
import { useState } from "react";
import { RemovableLink } from "@components/RemovableLink";

export interface PayeeInputProps {
  payee: string;
  payments: Payment[];
  payeePayment: PayeePayments | undefined;
  handleRemovePayment: (payment: Payment) => void;
  handleAddPayment: (amount: number) => void;
}

const PayeeInput: React.FC<PayeeInputProps> = ({
  payee,
  payments,
  payeePayment,
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
      size={{ md: 4, sm: 6, xs: 12 }}
      justifyContent={"flex"}
      sx={{ border: "1px solid", borderRadius: "2px" }}
      display={"flex"}
      flexDirection="column"
      p="1rem"
    >
      <Box alignItems="center" display={"flex"}>
        <Box
          sx={{
            ml: "0.5rem",
            borderRadius: "50%",
            backgroundColor: "#111111",
            aspectRatio: 1,
            width: "auto",
            height: "80%",
            alignItems: "center",
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <Person />
        </Box>
        <Typography alignSelf="center" ml="1rem" variant="h4">
          {payee}
        </Typography>
        <Typography ml="auto">
          ($
          {payments
            .filter((payment) => payment.payee === payee)
            .reduce((sum, payment) => {
              return payment.amount + sum;
            }, 0)}{" "}
          paid)
        </Typography>
      </Box>
      <Divider />
      {payments
        .filter((payment) => payment.payee === payee)
        .map((payment) => (
          <RemovableLink
            value={
              <>
                <Typography>${payment.amount}</Typography>
                <IconButton>
                  <Remove></Remove>
                </IconButton>
              </>
            }
            onClick={() => handleRemovePayment(payment)}
          ></RemovableLink>
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
            if (e.key == "Enter") {
              submitPayment();
            }
          }}
          value={newPaymentAmount > 0 ? newPaymentAmount : ""}
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
      {payeePayment?.owes?.length && (
        <Box>
          <Typography variant="h5" mt="1rem">
            Owes
          </Typography>
          <Divider />
          <Box>
            {payeePayment.owes.map((p) => (
              <Typography>
                {p.payee}: ${p.amount}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Grid2>
  );
};

export default PayeeInput;
