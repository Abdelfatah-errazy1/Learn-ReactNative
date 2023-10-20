import React, { useState } from 'react'
import {View ,StyleSheet, Button, TextInput } from 'react-native'

const AddItem = ({addHandler}) => {
  const [text,setText]=useState('')
  
  const txtHandler=(value)=>{
    setText(value)
  }
  const pressHandler=(text)=>{
    addHandler(text)
    setText('')
  }
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      value={text}
      onChangeText={txtHandler}
      placeholder='add new ...'
      />
      <Button style={styles.btn}  onPress={()=>pressHandler(text)} title='add new' color='#039BE5'/>

    </View>
  )
}

export default AddItem

const styles=StyleSheet.create({
  container:{
    flex:1,
    margin:12,
    
  },
  input:{
    borderColor:'#039BE5',
    borderWidth:2,
    marginBottom:4,
  } ,
  btn:{
    marginBottom:40,
  }
})