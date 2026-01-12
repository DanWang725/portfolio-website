import { Box, Button, Grid2, Input, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import MonoalphabetSubField, {
  DecoratedCharacter,
} from './components/MonoalphabeticSubField';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const MonoalphabeticalSubstitution = () => {
  const [cipherText, setCipherText] = useState('');
  const [decryptedText, setDecryptedText] = useState<string>('');

  const handleDecrpytedContent = (d: string) => {
    setDecryptedText(d);
  };

  return (
    <Box>
      <div>Monoalphabetical Substitution Component</div>
      <Grid2 container spacing={4} width="100%">
        <Grid2 size={6}>
          <Input
            onChange={(e) => setCipherText(e.target.value)}
            multiline
            fullWidth
          ></Input>
        </Grid2>
        <Grid2 size={6}>
          <Typography
            sx={{ letterSpacing: '0.3rem', overflowWrap: 'break-word' }}
          >
            {decryptedText}
          </Typography>
        </Grid2>
      </Grid2>
      <MonoalphabetSubField
        ciphertext={cipherText}
        handleDecryptedContent={handleDecrpytedContent}
      />
    </Box>
  );
};
export default MonoalphabeticalSubstitution;
