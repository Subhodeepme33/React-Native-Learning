import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading ]=useState(true);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState([]);

  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission Denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      //Changes
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLoading(true);
    })();
  }, [latitude, longitude]);

  useEffect(() => {
      //const timer = setTimeout(() => console.log("Waiting for 3 seconds "), 3000);
      async function AqicnApiCall() {
            
            let res = await fetch(
              'https://api.waqi.info/feed/geo:' +
                latitude +
                ';' +
                longitude +
                '/?token=ac3a71fc80931abd95ede14c2040f0678f578703'
            )
              .then((response) => response.json())
              .then((json) => {
                //console.log('data: ', json.data);
                setData(json.data)
                setLoading(false);
              })
              
              .catch((error) => console.log(error))
          }
        AqicnApiCall();
        
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      {
        isLoading ?
        <View style={styles.activity}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      :
        <ScrollView>
        <Text style={styles.data}>Pollution Levels</Text>   
        <Text style={styles.data}>{latitude}</Text>
        <Text style={styles.data}>{longitude}</Text>
        <Text style={styles.data}>AQI: {data?.aqi}</Text>
        <Text style={styles.data}>Dominant Pollutant: {data?.dominentpol}</Text>
        <Text style={styles.data}>CO: {data?.iaqi?.co?.v}</Text>
        <Text style={styles.data}>DEW: {data?.iaqi?.dew?.v}</Text>
        <Text style={styles.data}>H: {data?.iaqi?.h?.v}</Text>
        <Text style={styles.data}>NO2: {data?.iaqi?.no2?.v}</Text>
        <Text style={styles.data}>O3: {data?.iaqi?.o3?.v}</Text>
        <Text style={styles.data}>P: {data?.iaqi?.p?.v}</Text>
        <Text style={styles.data}>PM10: {data?.iaqi?.pm10?.v}</Text>
        <Text style={styles.data}>PM25: {data?.iaqi?.pm25?.v}</Text>
        <Text style={styles.data}>SO2: {data?.iaqi?.so2?.v}</Text>
        <Text style={styles.data}>T: {data?.iaqi?.t?.v}</Text>
        <Text style={styles.data}>W: {data?.iaqi?.w?.v}</Text>
        <Text style={styles.data}>CO: {data?.iaqi?.co?.v}</Text>
        <Text style={styles.data}>NEAREST STATION: {data?.city?.name}</Text>
        </ScrollView>
      }
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 15,
    margin: 10,
  },
  data: {
    margin:15,
    padding:10,


  },
  activity: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    justifyContent: "center"
  }
});
