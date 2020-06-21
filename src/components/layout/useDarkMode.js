import { useState } from 'react'
export const useDarkMode = () => {
  const userTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(userTheme || 'light')

  const toggleTheme = () => {
    if(theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }
  return [theme, toggleTheme]
}
