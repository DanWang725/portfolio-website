import { useEffect } from 'react';
import { scrollToHash, getHash } from '../../shared-utils/src';

export const useActionHashScroll = () => {
  useEffect(() => {
    const initHash = getHash();
    if (initHash) {
      const path = initHash.substring(1, initHash.length);
      scrollToHash(path);
    }
  }, []);
};
