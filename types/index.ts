import { Dispatch, SetStateAction } from "react";

export interface FlagProperties {
  svg: string;
  png: string;
}

export interface CurrenciesProperties {
  name: string;
  symbol: string;
}

export interface NativeName {
  official: string;
  common: string;
}

export interface FlagThumbnailResponse {
  name: {
    official: string;
    nativeName: { [key: string]: NativeName };
  };
  region: string;
  population: number;
  flags: FlagProperties;
  capital: string[];
}

export interface FlagDetailResponse extends FlagThumbnailResponse {
  tld: string[];
  currencies: { [name: string]: CurrenciesProperties };
  languages: { [name: string]: string };
  subregion: string;
  borders: string[];
}

export interface ThemeContext {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export interface InputDropdownProps {
  value: string[];
  toggleFunction: (value: string) => void;
}

export interface InputTextProps {
  placeholder: string;
  toggleFunction: (value: string) => void;
}

export interface BadgeProps {
  title: string;
}
