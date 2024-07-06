'use client';

import { createContext, SetStateAction, Dispatch } from 'react';

export type TextColorType = 'Black' | 'White';

export interface BgContextType {
  bgColor: string | undefined;
  setBgColor: Dispatch<SetStateAction<string>>;
}

export const BgContext = createContext<BgContextType>({
  bgColor: '#F1FAEE',
  setBgColor: () => {},
});
