import  { useEffect, useState,createContext } from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    
    const [theme, setTheme] = useState(() => {
        // getting the default theme from the local storage if existing theme is there then we will use that other will keep as 'light'
        return localStorage.getItem('ExistTheme') || 'light';
    });

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // here we set the latest theme in to local storage
        localStorage.setItem('ExistTheme', newTheme); 
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);



    return (<ThemeContext.Provider value={{value}}>{children}</ThemeContext.Provider>)
}
