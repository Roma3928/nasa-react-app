import React from 'react';

export const useFetching = (calback) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await calback();
    } catch (e) {
      setError(true);
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
