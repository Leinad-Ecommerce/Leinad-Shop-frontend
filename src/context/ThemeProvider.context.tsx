import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import React, { createContext, useState } from 'react';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import usePersistedState from '@/utils/usePersistedState';

type ThemeOptions = "dark" | "light"

interface ThemeProviderContextProps {
    theme: string,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeProviderContext = createContext<ThemeProviderContextProps>({} as ThemeProviderContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = usePersistedState<ThemeOptions>("theme", "light");

    return (
        <ThemeProviderStyled theme={theme === "dark" ? dark : light}>
            {children}

            <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}>{theme}</button>
        </ThemeProviderStyled>
    )
}