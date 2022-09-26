import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({text,onpress}) => {
  return (
    <TouchableOpacity onpress={onpress}>
        <View style={styles.button} >
      <Text style={styles.buttonText}>{text}</Text>
    </View>

    </TouchableOpacity>
    
  )
}

const styles= StyleSheet.create({
    button:{
        borderRadius:8,
        backgroundColor:"transparent",
        borderColor:"green",
        paddingTop:10

    },
    buttonText:{
        color:'green',
        textAlign:"center"


    }
})
export default Button;

