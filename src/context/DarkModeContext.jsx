import React, {createContext, useEffect, useState} from 'react'
const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    // Apply or remove dark mode class on body
    useEffect(() => {
        if(darkMode){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark")
        }
    }, [darkMode])
  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}} >
        {children}
      </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}
