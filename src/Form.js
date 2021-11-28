import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert} from 'react-native'

export const Form = props => {
    const [inputValue, setInputValue] = useState('')

    const pressHandler = () => {
        if (inputValue.trim()) {
            props.onSubmit(inputValue)
            setInputValue('')
        } else {
            Alert.alert('Введите название элемента')
        }
        
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.field} 
                placeholder='Введите элемент списка'
                onChangeText={text=>setInputValue(text)}
                value={inputValue} 
                autoCorrect={false}
            />
            {/* <TouchableOpacity onPress = {() => {}}>
                <View style = {{
                    height:'100%',
                    width: 50,
                    backgroundColor: '#3949ff', 
                    alignItems: 'center', 
                    justifyContent: 'center'}}
                >
                    <Text style = {{color: 'white'}}> + </Text>
                </View>
            </TouchableOpacity> */}
            <Button 
                title='  +  ' 
                onPress={pressHandler} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    field: {
        width: '80%',
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    }
})