import React ,{useState} from 'react';
import { StyleSheet, Text, View , Button ,TextInput} from 'react-native';
import database from '../config';

export default function MLManage({navigation}) {

 const [text,setText]=useState('');

 function saveitem(){
    const db=database().ref("test");
    data.push({
      text : text
    })

  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20,padding:20 }}>
        <Text>Machine Learning algo Screen</Text>
        <TextInput
          style={{ width:300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setText(text)}
        />
        <Button title="add"  onPress={()=>{
          saveitem()
        }}/>
      </View>
    );
  }
  
   