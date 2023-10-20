
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
         My Todos App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
  header:{
    backgroundColor:'#039BE5',
    height:80,
    padding:15,
    textAlign:'center',
  },
  title :{
    color:"white",
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',

    },

});
