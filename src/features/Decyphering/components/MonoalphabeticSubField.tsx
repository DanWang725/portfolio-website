import { useEffect, useState } from 'react';
import {
  getAlphabetArray,
  getLetterFrequencies,
  letterFrequencies,
} from '../utils';
import { Box, Button, Typography } from '@mui/material';

export interface DecoratedCharacter {
  char: string;
  highlight: boolean;
}

interface MonoalphabetSubFieldProps {
  ciphertext: string;
  handleDecryptedContent: (d: DecoratedCharacter[]) => void;
}

const MonoalphabetSubField: React.FC<MonoalphabetSubFieldProps> = ({
  ciphertext = '',
  handleDecryptedContent,
}) => {
  const [mapping, setMapping] = useState<{ [key: string]: string }>({});
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [uniqueLetters, setUniqueLetters] = useState<string[]>([]);
  const [frequencies, setFrequencies] = useState<{ [key: string]: number }>({});
  const [keys, setKeys] = useState<string[]>(getAlphabetArray());

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
    console.log(unique);
    setUniqueLetters(unique);
  }, [ciphertext]);

  useEffect(() => {
    const decrypted = ciphertext.split('').map((s) => {
      s = s.toUpperCase();
      // not one of our mapped characters
      if (mapping[s] === undefined) {
        return { char: s } as DecoratedCharacter;
      }
      //no key has been selected yet
      const converted = mapping[s] !== null ? mapping[s] : '*';

      return { char: converted, highlight: selectedLetter === s.toUpperCase() };
    });

    handleDecryptedContent(decrypted);
    const mappingKeys = Object.values(mapping).filter(
      (val) => val !== undefined,
    );
    // setAvailableLetters(
    //   to_a().filter((s) => !mappingKeys.some((key) => key === s)),
    // );
  }, [mapping, ciphertext, selectedLetter]);

  useEffect(() => {
    console.log(selectedLetter);
    console.log(relativeFrequency('B', selectedLetter));
    const newArr = getAlphabetArray().sort(
      (a, b) =>
        relativeFrequency(a, selectedLetter) -
        relativeFrequency(b, selectedLetter),
    );
    console.log(newArr);
    setKeys(newArr);
  }, [selectedLetter]);

  return (
    <>
      <Box display="flex" gap={1} width="auto" overflow="auto">
        {uniqueLetters.map((s) => (
          <Button
            variant="contained"
            color="info"
            onClick={
              selectedLetter === s
                ? () => setSelectedLetter('')
                : () => setSelectedLetter(s)
            }
            sx={{
              border: selectedLetter === s ? '1px solid white' : '',
              my: 1,
              padding: 1,
              minWidth: 'auto',
              flexDirection: 'column',
            }}
          >
            <Typography variant="caption">
              {frequencies[s]?.toFixed(2) ?? '?'}%
            </Typography>
            <Typography>{s}</Typography>
            <Typography>{mapping[s] ?? '?'}</Typography>
          </Button>
        ))}
      </Box>
      {selectedLetter !== '' && (
        <Box>
          {keys.map((s) => (
            <Button
              variant="contained"
              disabled={
                Object.values(mapping)
                  .filter((val) => val !== null)
                  .indexOf(s) !== -1
              }
              onClick={() => {
                setMapping({ ...mapping, [selectedLetter]: s });
                setSelectedLetter('');
              }}
            >
              {s}
              <br />
              {letterFrequencies[s]}%
            </Button>
          ))}
        </Box>
      )}
    </>
  );
};

export default MonoalphabetSubField;
