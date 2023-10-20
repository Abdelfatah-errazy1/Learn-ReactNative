import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

export default function App() {
  const [todos,setTodos]=useState([
    {text:'hello world ',key:1},
    {text:'hello morocco ',key:2},
    {text:'hello fes ',key:3},
  ])

  const addHandler=(text)=>{
    setTodos([...todos,{text:text,key:todos.length+1}])
    
  }
  const pressHandler=(key)=>{
    console.log(key);
    setTodos(
      todos.filter(ele=>ele.key!==key)
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Header />
     <AddItem addHandler={addHandler} />
      <FlatList 
      style={styles.liste}
      data={todos}
      renderItem={(item)=>(
        <TodoItem item={item} pressHandler={pressHandler} />
      )}
      /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    backgroundColor:'#039BE5',
    color:'#777'
  },
  liste:{
    marginTop:40,

  }
});
