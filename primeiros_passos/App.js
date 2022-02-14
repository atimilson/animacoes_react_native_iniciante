import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(90)).current;

  useEffect(() =>{

    Animated.timing(larAnimada,{
      toValue : 300,
      duration : 3000,
      useNativeDriver: false
    }).start();

  },[]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ backgroundColor:'#4169E1', width: larAnimada ,height: altAnimada, justifyContent: 'center'}}>
        <Text style={{ textAlign: 'center', fontSize:22 ,color: 'white' }}>
          Carregando...
        </Text>
      </Animated.View>
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
});
