'use client';

import { createContext, SetStateAction, Dispatch } from 'react';

export type TextColorType = 'Black' | 'White';

export interface TextContextType {
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
}

export const TextContext = createContext<TextContextType>({
  textColor: 'Black',
  setTextColor: () => {},
});
