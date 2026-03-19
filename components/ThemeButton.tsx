
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ThemeButtonProps {
    text: string
    color?: string
}

const ThemeButton = ({ text, color = "gray" }: ThemeButtonProps) => {
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