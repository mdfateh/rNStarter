import {useEffect, useState} from 'react';

import ReactiveStateHandler from 'src/Utilities/ReactiveStateHandler';

function useAppState(keyName?: string) {
  const [value, setValue]: any = useState(null);
  useEffect(() => {
    ReactiveStateHandler.subscriber$.subscribe((state) => {
      if (keyName) {
        setValue(state[keyName]);
      } else {
        setValue(state);
      }
    });
  }, [keyName]);

  return value;
}

export default useAppState;
