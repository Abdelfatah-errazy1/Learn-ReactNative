import React from 'react'
import { Text,StyleSheet,View,TouchableOpacity } from 'react-native'
const TodoItem = ({item,pressHandler}) => {
  return (
    <TouchableOpacity style={styles.todoItem} onPress={()=>pressHandler(item.item.key)}>
      <Text style={styles.item}>{item.item.text}</Text>
     </TouchableOpacity>
  )
}

export default TodoItem

const styles=StyleSheet.create({
  
  item:{
    marginTop:15,
    fontSize:20,
    backgroundColor:'#eee',
    // color:'white',
    paddingLeft:50,
    fontSize:30,
  }
})