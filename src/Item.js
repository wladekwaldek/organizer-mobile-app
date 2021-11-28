import React, { useState } from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

export const Item = ({ title, onRemove}) => {
    const [visible, setVisible] = useState(false)
    return (
            <TouchableOpacity 
                activeOpacity={0.3} 
                onPress={() => {
                    visible ? setVisible(false) : setVisible(true)
                }} 
                onLongPress={() => onRemove(title.id)}
            >
                <View style={styles.container}>
                    <Text>{title.title}</Text>
                    {visible ? <View style={styles.visible}></View> : null}
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        margin: 5,
        padding: 15
    },
    visible: {
        width: 10,
        borderRightWidth: 2,
        borderRightColor:'#3f8fff',        
        borderBottomWidth: 2, 
        borderBottomColor: '#3f8fff',
        transform: [{rotate: '43deg'}]
    }
})