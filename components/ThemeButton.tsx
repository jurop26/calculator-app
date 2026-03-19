
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ThemeButtonProps {
    text: string
    idx: number
}

const ThemeButton = ({ text, idx }: ThemeButtonProps) => {
    const position = idx + 1
    const color = position % 4 === 0 ? "orange" : position < 4 ? 'grey' : "#555"

    return (
        <View style={[styles.button, { backgroundColor: color }]}>
            <Pressable onPress={() => { }}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </Pressable>
        </View >
    )
}

export default ThemeButton

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 75,
        height: 75,
        borderRadius: '50%'
    },
    text: {
        color: "white",
        fontSize: 32
    }
})