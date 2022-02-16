import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

const ButtonAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const botaoRef = useRef(null);
  function handleClick(){
    botaoRef.current.rotate();    
  }
  return (
    <View style={styles.container}>
      <Animatable.Text 
      style={styles.title}
      animation="pulse"
      iterationCount={Infinity}
      >
        Ola Mundo
      </Animatable.Text>
      <ButtonAnimado style={styles.botao}
      animation="pulse"
      iterationCount={3}
      ref={botaoRef}
      onPress={handleClick}>
        <Text style={{color: '#FFF'}}>Animar</Text>
      </ButtonAnimado>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
  },
  botao: {
    width: '70%', 
    height: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});
