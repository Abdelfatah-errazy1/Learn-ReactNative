import React from 'react'
import { Text,StyleSheet,View,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const TodoItem = ({item,pressHandler}) => {
  return (
    <TouchableOpacity style={styles.todoItem} onPress={()=>pressHandler(item.item.key)}>
      <View  style={styles.item}>
      <Text style={styles.text}>{item.item.text}</Text>
        <FontAwesome style={styles.icon} name='trash' />
      </View>
     </TouchableOpacity>
  )
}

export default TodoItem

const styles=StyleSheet.create({
  
  item:{
    marginTop:15,
    fontSize:20,
    backgroundColor:'#eee',
    
    paddingLeft:50,
    fontSize:30,
    flex:1,
    flexDirection:'row',
    paddingVertical:5,
    justifyContent:'space-between'

  },
  icon:{
    color:'red',
    fontSize:40,
    padding:4
  },
  text:{
    fontSize:20,
    padding:4

  }
})