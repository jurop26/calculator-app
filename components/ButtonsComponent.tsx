import { CALCULATOR_BUTTONS } from '@/constants/constants'
import React from 'react'
import { View } from 'react-native'
import ThemeButton from './ThemeButton'

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