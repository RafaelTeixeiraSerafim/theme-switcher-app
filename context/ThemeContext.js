import { createContext, useState } from "react";
import { useColorScheme } from "react-native";


const ThemeContext = createContext()

const themes = {
    light: {
        dark: false,
        colors: {
            background: "rgb(255, 255, 255)",
            border: "rgb(216, 216, 216)",
            card: "rgb(242, 242, 242)",
            notification: "rgb(255, 59, 48)",
            primary: "rgb(0, 122, 255)",
            text: "rgb(28, 28, 30)",
        },
    },
    dark: {
        dark: true,
        colors: {
            background: "rgb(1, 1, 1)",
            border: "rgb(39, 39, 41)",
            card: "rgb(40, 40, 40)",
            notification: "rgb(255, 69, 58)",
            primary: "rgb(10, 132, 255)",
            text: "rgb(229, 229, 231)",
        },
    },
}

export function ThemeProvider({ children }) {
    const colorScheme = useColorScheme();
    const [themeName, setTheme] = useState(colorScheme || 'light');

    let theme = themes[themeName];

    const toggleTheme = newTheme => {
        setTheme(newTheme)
        theme = themes[themeName];
    }

    return (
        <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;