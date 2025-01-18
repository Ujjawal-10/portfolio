import React, { children, useEffect, useState } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    
    const[theme,setTheme]=useState('light');

    // useEffect(()=>{
    //     document.body.className= theme
        
    // },[theme]);

    const changeTheme =()=>{
        setTheme((prev)=>prev==='light' ? 'dark': 'light')
        
    }
    useEffect(()=>{
        document.body.className= theme
        
    },[theme,changeTheme]);


    return (<ThemeContext.Provider value={{theme,changeTheme}}>{children}</ThemeContext.Provider>)
}

