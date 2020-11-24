import { RSA_NO_PADDING } from 'constants';
import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View ,Pressable ,Image , } from 'react-native';
import egg1 from './assets/egg01.jpg'; 
import egg2 from './assets/egg02.jpg'; 
import egg3 from './assets/egg03.jpg'; 

let ImageArray=[egg1,egg2,egg3];
var imgNum = ImageArray.length

let MsgArray=["あ","い","う","え"];
var  eggMsg  = MsgArray.length

  


export default function App() {
  var [count, setCount] = useState(100);
  // var [message, setMessage] = useState("Clash!!!");
  


  
  imgNum=0;
  // eggMsg=0;
  eggMsg="Clash!!!";
  if(count <= 75){
    // eggMsg=1;
    eggMsg="Clash!Clash!";
    
  } if(count <= 50){
    imgNum=1;
    // eggMsg=2;
    eggMsg="いいぞ！！";
    
  }if(count<=25){
    eggMsg="やったれ！！";
    
    
    
  }if(count===0){
    imgNum=2;
    eggMsg="おめでとう！！！";
    

  }if(count<=-1){
    count=100;
    imgNum=0;
    eggMsg="Clash Again";

}

// else ifだと動かない
// 配列だと動かない



  return (
    <View style={styles.container}>
        <Text style={{color: '#195', fontSize: 45, backgroundColor:'black', width:"100%" ,padding:10,textAlign: "center", bottom:75,}}>
          {count}
        </Text>
        
      <Pressable
                onPress={() => setCount(count -1)}>
                  <Image
                  source={ImageArray [imgNum]}>
                  </Image>
                  {/* style= {{width: 200, height:200,resizeMode:"cencontain"}}</Image> */}
      </Pressable>

      <Text style={{color: 'black', fontSize: 60, paddingBottom:10,textAlign: "center",top:30 }}>
          {eggMsg}
      </Text>
    </View>
  );
}













const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  image:{
    width: 300,
    height: 400,
    resizeMode: "contain" 
    
  }
});

