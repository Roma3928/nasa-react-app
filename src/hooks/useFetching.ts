import { type } from 'os';
import { useState } from 'react';

type CallbackFn = () => Promise<void>;
type FetchingFn = [CallbackFn, boolean, boolean];

export const useFetching = (callback: CallbackFn): FetchingFn => {
  let [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(true);
      console.error((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
