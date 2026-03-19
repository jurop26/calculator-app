import useDisplayed from '@/hooks/useDisplayed'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DisplayComponent = () => {

    const { displayed } = useDisplayed()

    return (
        <View style={{ alignItems: "flex-end", justifyContent: "center", width: '100%', padding: 40 }}>
            <Text style={styles.text}>{displayed}</Text>
        </View>
    )
}

export default DisplayComponent

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        color: "white"
    }
})