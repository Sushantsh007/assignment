import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Image,Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




const homeItems = [
  {
      id: 3,
      name: 'Cookies',
      photo_url:
          'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
      id: 1,
      name: 'Mexican Food',
      photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
      id: 2,
      name: 'Italian Food smotthes',
      photo_url:
          'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
      id: 4,
      name: 'Smoothies',
      photo_url:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 30,
    name: 'Cookies',
    photo_url:
        'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
},
{
    id: 10,
    name: 'Mexican Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
},
{
    id: 20,
    name: 'Italian Food smotthes',
    photo_url:
        'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
},
{
    id: 40,
    name: 'Smoothies',
    photo_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
},



];


 const Categorey=({navigation}) =>{
    return (
      <ScrollView>
      
      <View style={{ flex: 1,flexDirection:'column',  padding: 20}}>
      {

             homeItems.map( item =>

              <TouchableOpacity onPress={()=> navigation.push("recipe")}>
                <View style={{borderWidth:1,borderColor:'grey',borderRadius:20,width:'100%',minHeight:250,marginTop:25}} key={item.id}>
                  <View >
                      <Image source={{ uri: item.photo_url }} style={{ width:'100%', height: 180,borderRadius:20}} ></Image>
                  </View>
                  <View style={{flex:1,justifyContent:'space-between',alignItems:"center"}}>
                      <Text style={{fontWeight:350,fontSize:20,color:'black'}}>{item.name}</Text>
                      <Text>Category</Text>
                  </View>
              </View>
              </TouchableOpacity>


          )
      }

  </View>

      
      

    </ScrollView>
    )
  }

 export default Categorey;

