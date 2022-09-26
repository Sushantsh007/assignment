import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const RecipeInfo = ({route,navigation}) => {
  
  const title=route.params.title;
  const photo_url=route.params.photo_url;
  const time=route.params.time;
  const ingredients=route.params.ingredients;
  const description=route.params.description;


  // var objing={
  //   array_ing:ingredients
  // }
  
  return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
      <Image source={{ uri: photo_url }} style={{ width:"100%", height: 180}} ></Image>
       <Text style={{fontSize:30,fontWeight:'bold',marginTop:20}}>{title}</Text>
       <Text style={{color:'green',marginTop:15}}>Categorey</Text> 
       <Text style={{fontWeight:'bold',marginTop:10}}>{time} minutes</Text>
       <Button
          title="View Ingridients"
          color='green'
          
          
          onPress={() => navigation.navigate("description")
          
        }
        />
       
       <Text>{description}</Text>

      

      
        
      </View>
    </ScrollView>
  );
};

export default RecipeInfo;





