import { Box, Button, Grid2, Input, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import MonoalphabetSubField, {
  DecoratedCharacter,
} from './components/MonoalphabeticSubField';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const MonoalphabeticalSubstitution = () => {
  const [cipherText, setCipherText] = useState('');
  const [mapping, setMapping] = useState<{ [key: string]: string | undefined }>(
    {},
  );
  // cyphertext char to some char
  const [decryptedText, setDecryptedText] = useState<
    (string | ReactJSXElement)[]
  >([]);
  // const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [uniqueLetters, setUniqueLetters] = useState<string[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  const handleDecrpytedContent = (d: DecoratedCharacter[]) => {
    setDecryptedText(
      d.map((character) => {
        return character.highlight ? <b>{character.char}</b> : character.char;
      }),
    );
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
          <Typography sx={{ letterSpacing: '0.4rem' }}>
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
