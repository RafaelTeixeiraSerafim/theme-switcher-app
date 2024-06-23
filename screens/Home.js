import { useContext, useEffect, useMemo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ThemeContext from "../context/ThemeContext";

export default function Home() {
    const { theme, themeName, toggleTheme } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        const newTheme = themeName === 'dark' ? 'light' : 'dark';
        toggleTheme(newTheme);
    }

    const themeStyles = {
        container: {
            backgroundColor: theme.colors.background
        },
        text: {
            color: theme.colors.text
        },
        buttonBackground: {
            backgroundColor: theme.colors.card
        }
    }

    return (
        <View style={[styles.container, themeStyles.container]}>
            <Text style={themeStyles.text}>Home page</Text>
            <TouchableOpacity
                onPress={handleToggleTheme}
                style={[
                    styles.button,
                    themeStyles.buttonBackground
                ]}>
                <Text style={themeStyles.text}>
                    Switch to {themeName === 'light' ? 'Dark' : 'Light'} Theme
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});
