import React, { useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(()=> {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      })
    ]).start();
    

  }, []);
 let porcentagemLargura = larAnimada.interpolate({
   inputRange: [0, 100],
   outputRange: ['0%', '100%'],
 });
 let porcentagemAltura = altAnimada.interpolate({
  inputRange: [50, 100],
  outputRange: ['5%', '100%'],
 });
 return (
   <View style={styles.container}>

      <Animated.View 
      style={{ 
        width: porcentagemLargura,
        height: porcentagemAltura,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        opacity: opacidadeAnimada
      }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF'}}></Text>
      </Animated.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})