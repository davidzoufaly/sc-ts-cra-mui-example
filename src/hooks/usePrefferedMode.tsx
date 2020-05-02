import { useEffect, useState } from 'react';

export type TMode = 'light' | 'dark';

export const usePrefferedMode = () => {
  const initialMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const [prefferedMode, setPrefferedMode] = useState<TMode>(initialMode);

  const matchMediaListener = (e: any) => {
    if (e.matches) {
      setPrefferedMode('dark');
    } else {
      setPrefferedMode('light');
    }
  };

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener(matchMediaListener);
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeListener(matchMediaListener);
  });

  return prefferedMode;
};
