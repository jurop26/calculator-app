
import { calculateResult, toggleLastNumberSign } from '@/helpers/helpers'
import useDisplayed from '@/hooks/useDisplayed'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ThemeButtonProps {
    text: string
    idx: number
}

const ThemeButton = ({ text, idx }: ThemeButtonProps) => {
    const { setDisplayed } = useDisplayed()
    const position = idx + 1
    const color = position % 4 === 0 ? "orange" : position < 4 ? 'grey' : "#555"

    const isClearButton = text === "AC"
    const isClearLastButton = text === "\u232B"
    const isNegotiationButton = text === "+/-"
    const isResultButton = text === "="

    const handlePress = () => {
        setDisplayed(prev => {
            const lastChar = prev.slice(-1)
            const lastCharRemoved = prev.slice(0, -1)

            if (isResultButton) {
                return calculateResult(prev)
            }
            if (isClearButton) {
                return "0"
            }
            if (isClearLastButton) {
                return prev.length === 1 ? "0" : lastCharRemoved
            }
            if (isNegotiationButton) {
                return toggleLastNumberSign(prev, lastChar)
            }

            const newText = isNaN(Number(lastChar)) && isNaN(Number(text))
                ? lastCharRemoved + text
                : prev + text


            return newText.replace(/^0+(?=\d)/, '').replace(/^,/, '0,')
        })
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View >
        </Pressable>
    )
}

export default ThemeButton

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 75,
        height: 75,
        borderRadius: 75 / 2
    },
    text: {
        color: "white",
        fontSize: 32
    }
})