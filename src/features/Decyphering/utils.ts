const getAlphabetArray = (start = 'A', end = 'Z') => {
  const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return a.slice(
    a.indexOf(start.toUpperCase()),
    a.indexOf(end.toUpperCase()) + 1,
  );
};

const getLetterFrequencies = (str: string, filter: string[]) => {
  return str
    .split('')
    .reduce<{ [key: string]: number }>((dictionary, curChar) => {
      if (!filter.includes(curChar)) return dictionary;
      if (!dictionary[curChar]) {
        dictionary[curChar] = 1;
      } else {
        dictionary[curChar]++;
      }
      return dictionary;
    }, {});
};

const letterFrequencies: Record<string, number> = {
  E: 12.3,
  T: 9.6,
  A: 8.1,
  O: 7.9,
  N: 7.2,
  I: 7.2,
  S: 6.6,
  R: 6.0,
  H: 5.1,
  L: 4.0,
  D: 3.7,
  C: 3.2,
  U: 3.1,
  P: 2.3,
  F: 2.3,
  M: 2.3,
  W: 2.0,
  Y: 1.9,
  B: 1.6,
  G: 1.6,
  V: 0.9,
  K: 0.5,
  Q: 0.2,
  X: 0.2,
  J: 0.1,
  Z: 0.1,
};
export { getAlphabetArray, letterFrequencies, getLetterFrequencies };
