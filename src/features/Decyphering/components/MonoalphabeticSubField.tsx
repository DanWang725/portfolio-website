import { useEffect, useState } from 'react';
import {
  getAlphabetArray,
  getLetterFrequencies,
  letterFrequencies,
} from '../utils';
import { Box, Button, Grid2, Tooltip, Typography } from '@mui/material';

export interface DecoratedCharacter {
  value: string;
  char: string;
  selectable: boolean;
  highlight: boolean;
}

interface MonoalphabetSubFieldProps {
  ciphertext: string;
  handleDecryptedContent: (d: DecoratedCharacter[]) => void;
  selectedLetter: string;
  handleSetSeletedLetter: (letter: string) => void;
}

const MonoalphabetSubField: React.FC<MonoalphabetSubFieldProps> = ({
  ciphertext = '',
  handleDecryptedContent,
  selectedLetter,
  handleSetSeletedLetter,
}) => {
  const [mapping, setMapping] = useState<{ [key: string]: string | null }>({});
  const [uniqueLetters, setUniqueLetters] = useState<string[]>([]);
  const [frequencies, setFrequencies] = useState<{ [key: string]: number }>({});
  const [keys, setKeys] = useState<string[]>(getAlphabetArray());

  const chooseLetter = (key: string, newMapping: string) => {
    const existing = Object.entries(mapping).filter(
      ([_, value]) => value === newMapping,
    );
    setMapping((mapping) => {
      mapping[key] = newMapping;
      for (let i = 0; i < existing.length; i++) {
        mapping[existing[i][0]] = null;
      }
      return mapping;
    });
    handleSetSeletedLetter('');
  };
  // init
  useEffect(() => {
    const alphabet = getAlphabetArray();
    // setAvailableLetters(alphabet);
    setMapping(
      alphabet.reduce((acc, char, index) => {
        acc = { ...acc, [char]: null };
        return acc;
      }, {}),
    );
  }, []);

  const relativeFrequency = (a: string, selected: string): number => {
    return Math.abs(frequencies[selected] - letterFrequencies[a]);
  };

  // find unique letters
  useEffect(() => {
    const upperC = ciphertext.toUpperCase();
    const alphabet = getAlphabetArray();
    const freq = getLetterFrequencies(upperC, alphabet);
    const totalFreq = Object.values(freq).reduce((sum, val) => sum + val, 0);
    for (var key in freq) {
      freq[key] = (freq[key] * 100) / totalFreq;
    }
    setFrequencies(freq);
    const unique = getAlphabetArray().filter((c) => upperC.indexOf(c) != -1);
    setUniqueLetters(unique);
  }, [ciphertext]);

  useEffect(() => {
    const decrypted = ciphertext.split('').map((s) => {
      s = s.toUpperCase();
      // not one of our mapped characters
      if (mapping[s] === undefined) {
        return { char: s, value: s, selectable: false } as DecoratedCharacter;
      }
      //no key has been selected yet
      let converted = mapping[s] !== null ? mapping[s] : '*';
      if (converted === null) {
        converted = '*';
      }

      return {
        char: converted,
        value: s,
        highlight: selectedLetter === s.toUpperCase(),
        selectable: true,
      };
    });

    handleDecryptedContent(decrypted);
  }, [mapping, ciphertext, selectedLetter]);

  useEffect(() => {
    const newArr = getAlphabetArray().sort(
      (a, b) =>
        relativeFrequency(a, selectedLetter) -
        relativeFrequency(b, selectedLetter),
    );
    setKeys(newArr);
  }, [selectedLetter]);

  return (
    <>
      <Box display="flex" gap={1} width="auto" overflow="auto">
        {uniqueLetters.map((s) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt="1rem"
          >
            <Tooltip
              title={`The frequency of '${s}' in the ciphertext is ${frequencies[s]?.toFixed(2)}%.`}
              placement="top"
            >
              <Typography variant="caption" textAlign={'center'}>
                {frequencies[s]?.toFixed(2) ?? '?'}%
              </Typography>
            </Tooltip>
            <Button
              variant="outlined"
              color="info"
              onClick={
                selectedLetter === s
                  ? () => handleSetSeletedLetter('')
                  : () => handleSetSeletedLetter(s)
              }
              sx={{
                border: selectedLetter === s ? '1px solid white' : '',
                mb: 1,
                padding: 1,
                minWidth: '3rem',
                flexDirection: 'column',
              }}
            >
              <Typography>{s}</Typography>
              <Typography>{mapping[s] ?? '?'}</Typography>
            </Button>
          </Box>
        ))}
      </Box>
      {selectedLetter !== '' && (
        <Grid2 container display="flex" gap={1}>
          {keys.map((s) => (
            <Grid2 size="auto" flexDirection="column" display="flex">
              <Button
                variant="outlined"
                onClick={() => {
                  chooseLetter(selectedLetter, s);
                }}
                sx={(theme) => ({
                  flexDirection: 'column',
                  mt: 1,
                  padding: 1,
                  minWidth: '2.4rem',
                  backgroundColor:
                    Object.values(mapping)
                      .filter((val) => val !== null)
                      .indexOf(s) !== -1
                      ? theme.palette.secondary.main
                      : theme.palette.background.default,
                })}
              >
                <Typography>{s}</Typography>
              </Button>
              <Tooltip
                title={`The English frequncy of '${s}' is ${letterFrequencies[s]}%`}
              >
                <Typography variant="caption" textAlign="center">
                  {letterFrequencies[s]}%
                </Typography>
              </Tooltip>
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
};

export default MonoalphabetSubField;
