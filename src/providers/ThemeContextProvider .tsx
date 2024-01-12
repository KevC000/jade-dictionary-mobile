import React, { useContext } from 'react'
import { ThemeName } from '../components/types/ThemeName'

type ThemeContextType = {
  currentTheme: ThemeName
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: 'light', // Corrected from 'theme' to 'currentTheme'
  toggleTheme: () => {}
})

export const useAppTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>('light')

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(nextTheme)
  }

  return <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}


