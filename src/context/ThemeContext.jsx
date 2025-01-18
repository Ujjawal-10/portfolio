import  { useEffect, useState,createContext } from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{

    const [theme, setTheme] = useState(() => {
        // Initialize theme from localStorage or default to 'light'
        return localStorage.getItem('ExistTheme') || 'light';
    });

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('ExistTheme', newTheme); // Save the theme to localStorage
    };

    useEffect(() => {
        // Apply the theme to the document body
        document.body.className = theme;
    }, [theme]);
    
    return (<ThemeContext.Provider value={{theme,changeTheme}}>{children}</ThemeContext.Provider>)
}
