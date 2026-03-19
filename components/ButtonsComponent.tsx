import React from 'react'
import { View } from 'react-native'
import ThemeButton from './ThemeButton'
const CALCULATOR_BUTTONS = ["<x", "AC", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ",", "="]

const ButtonsComponent = () => {
    return (
        <View style={{ justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: 10, maxWidth: 350 }}>
            {CALCULATOR_BUTTONS.map(b =>
                <ThemeButton key={b} text={b} />
            )}
        </View>
    )
}

export default ButtonsComponent