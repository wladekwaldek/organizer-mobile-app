import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Form } from './src/Form';
import { NavBar } from './src/NavBar';
import { Item } from './src/Item';

export default function App() {
  const [listItems, setListItems] = useState([])

  const list = () => {
    if (listItems.length !== 0) {
      return true
    } else {return false}
  }

  const addItem = title => {
    setListItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeItem = id => {
    setListItems(prev => prev.filter(item => item.id !== id))
  }

  const removeListItems = () => {
    setListItems([])
  }
  return (
    <View style={styles.container}>
      <NavBar list={list()} onRemoveListItems={removeListItems} />
      <Form onSubmit={addItem} />
      <FlatList
        keyExtractor={item => item.id} 
        data={listItems}
        renderItem={({ item }) => <Item title={item} onRemove={removeItem} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 130
    }
});
