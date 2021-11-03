import React, {useEffect} from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
        
    const today = new Date();
    const limitDate = new Date('2021,11,29');
    // const themes = {
    //     color: '#fff',
    //     background: '#000'
    // }
    // const [theme, setTheme] = React.useState(themes);    
    const [theme, setTheme] = React.useState('light');
    useEffect(() => {
        (limitDate>today) ? setTheme('dark') : setTheme('light');
    }, [today])
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
