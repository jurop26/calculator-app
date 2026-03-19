import React from 'react'
import { View } from 'react-native'
import ThemeButton from './ThemeButton'

const CALCULATOR_BUTTONS = ["\u232B", "AC", "%", "\u00F7", "7", "8", "9", "\u00D7", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ",", "="]

const ButtonsComponent = () => {

    return (
        <View style={{ justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: 10, maxWidth: 350 }}>
            {CALCULATOR_BUTTONS.map((b, i) =>
                <ThemeButton key={b} idx={i} text={b} />
            )}
        </View>
    )
}

export default ButtonsComponent