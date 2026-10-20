// Dado

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState('')
  const [numero, setNumero] = useState(1);
  const [frase, setFrase] = useState('Ataque normal!');
  const [imagem, setImagem] = useState(
  require('./assets/dado_roxo_face_1.png'));

  const [mostrar, setMostrar] = useState(true);

const sortear = () => {
  const resultado = Math.floor(Math.random() * 6) + 1;

  setMostrar(false);

  setTimeout(() => {
    setNumero(resultado);

    switch (resultado) {
      case 1:
        setFrase('Ataque fraco!');
        setImagem(require('./assets/dado_roxo_face_1.png'));
        break;

      case 2:
        setFrase('Ataque fraco!');
        setImagem(require('./assets/dado_roxo_face_2.png'));
        break;

      case 3:
        setFrase('Ataque normal!');
        setImagem(require('./assets/dado_roxo_face_3.png'));
        break;

      case 4:
        setFrase('Ataque normal!');
        setImagem(require('./assets/dado_roxo_face_4.png'));
        break;

      case 5:
        setFrase('Ataque forte!');
        setImagem(require('./assets/dado_roxo_face_5.png'));
        break;

      case 6:
        setFrase('Ataque forte!');
        setImagem(require('./assets/dado_roxo_face_6.png'));
        break;
    }

    setMostrar(true);
  }, 1000);
};
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
          placeholder="Nome"
          value={texto}
        onChangeText={setTexto}/>

      <Text style={styles.title}>Hora de atacar!</Text>
      <Text style={styles.subTitle}>{frase}</Text>
      <Text style={styles.appName}>DadoMestre</Text>

      <Image source={imagem} style={styles.imagem}>
        
      </Image>
      <Pressable style={styles.button} onPress={sortear}>
      <Text style={[styles.subTitle, styles.buttonText]}>Sortear</Text>
      </Pressable>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

 textInput: {
  width: 250,
  height: 50,
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  padding: 10,
}, 

title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

 

  subTitle: {
    fontSize: 20,
  },

  appName: {
    fontSize: 20, 
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  imagem: {
    width: 300,
    height: 300,

  }

});