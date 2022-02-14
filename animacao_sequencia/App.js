import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(90)).current;
  const opacidade =  useRef(new Animated.Value(0)).current;

  useEffect(() =>{
    
    Animated.sequence([
      Animated.timing(opacidade, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),        
      ]),
      Animated.timing(opacidade, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      })

    ]).start()
  },[]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ backgroundColor:'#4169E1', width: larAnimada ,height: altAnimada, justifyContent: 'center', opacity: opacidade}}>
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
