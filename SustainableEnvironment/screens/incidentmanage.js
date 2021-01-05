import React ,{useState}from 'react';
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import { Appbar ,Divider, Button, Card, Caption , Paragraph ,TextInput } from 'react-native-paper';
export default function IncidentManage({navigation}) {
   
  return (
      <ScrollView >
        {/* INCIDENT MANAGEMENT FORM */}
      <Appbar.Header>
        <Appbar.Content title="Incident Management Form" />
      </Appbar.Header>       
       
        <Card style={styles.cardStyle}>
          
          <Card.Content>
          <Divider />
            
         <Paragraph style={{marginBottom:10 ,padding:5,fontSize:20,}}>Please fill-up the below form:</Paragraph>
          <Divider /> 
          <View style={styles.cardcomponents}>
              <Caption>Name:</Caption>
              <TextInput
                  style={styles.formcomponents}
                  label="Full Name"   
                  mode="outlined"
                  placeholder="John Doe"
                 
                 />
              <Caption>Email:</Caption>    
                 <TextInput
                  style={styles.formcomponents}
                  label="Contact Email's"   
                  mode="outlined"
                  placeholder="johndoe@email.com"
                />
              <Caption>Phone:</Caption> 
                <TextInput
                  style={styles.formcomponents}
                  label="Phone"   
                  mode="outlined"
                  placeholder="6532...."
                />
              <Caption>Location Address:</Caption> 
                <TextInput
                  style={styles.formcomponents}
                  label="Incident Address"   
                  mode="outlined"
                />
              <Caption>Incident Description:</Caption>   
                <TextInput
                  style={styles.formcomponents}
                  label="Incident Description"   
                  mode="outlined"
                  multiline={true}
                  numberOfLines={6}
                />
            </View>    
          </Card.Content>
        </Card>
        <View style={styles.buttonview}>
        <Button mode="contained" style={styles.button}>
            Report Incident
          </Button>
        </View>
      </ScrollView>
    );
  }
  
 const styles= StyleSheet.create({
   header :{
     marginTop: 30,
     padding:10,
     margin:8,
     justifyContent:'center',
   },
   button :{
     justifyContent:'center',
     marginTop: 5,
     padding:5,
     alignSelf:'center',
     backgroundColor:'midnightblue',
     
   },
   cardcomponents:{
     margin:2,
     fontSize:10,
     
   },
   formcomponents:{
     
     marginBottom:3,
     borderColor:'coral',
   },
   cardStyle :{
     borderColor:'purple',
     borderWidth:1,
     justifyContent:'center',
     margin:10,
     //marginTop:5,
   },
   buttonview :{
     borderColor : 'purple',
     borderWidth:1,
     borderRadius:1,
     margin:10,
     padding:20,
   }
 })  