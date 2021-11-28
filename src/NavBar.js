import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export const NavBar = ({list, onRemoveListItems}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Создать список</Text>
            {list ? <Button title='удалить список' onPress={() => onRemoveListItems()} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#3f8fff',
        alignItems: 'flex-end', 
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10
    },
    text: {
        color:'white',
        fontSize: 20
    }
}) 