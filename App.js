import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
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
    if(text.length>3){

      setTodos([...todos,{text:text,key:todos.length+1}])
    }else{
      Alert.alert('Oops', 'The todos must be more than 3 characters.', [
        {
          text: 'Okay',
          onPress: () => {
            console.log('Okay');
          }
        }
      ]);
      

    }
    
  }
  const pressHandler=(key)=>{
    setTodos(
      todos.filter(ele=>ele.key!==key)
    )
  }
  const dissmisKeyBoard=()=>{
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={dissmisKeyBoard()}>
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
    </TouchableWithoutFeedback>
    
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
