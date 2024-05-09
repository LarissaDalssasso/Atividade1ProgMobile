import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CampoTitulo from './Componentes/CampoTitulo';
import CampoTexto from './Componentes/CampoTexto';
import ComponenteBotao from './Componentes/ComponenteBotao';
import ComponenteLista from './Componentes/ComponenteLista';

export default function App() {
  const [altura, setAltura] = useState(0.0)
  const [peso, setPeso] = useState(0.0)
  const [listaMensagens, setListaMensagens] = useState([])

  function calculaImc() {
    setListaMensagens(oldArray => [...oldArray, "Altura: " + altura + " Peso: " + peso + " Imc: " + parseInt(peso / (altura * altura))])

  }
  return (
    <View style={styles.container}>
      <CampoTitulo
        titulo="IMC"
        cor='#7A8C5F'
        tamanhoFonte={50}
      ></CampoTitulo>

      <CampoTexto
        titulo="Altura"
        sugestao="Ex: 1.70"
        tipoTeclado='numeric'
        funcao={setAltura}
      ></CampoTexto>

      <CampoTexto
        titulo="Peso"
        sugestao="Ex: 75.3"
        tipoTeclado='numeric'
        funcao={setPeso}
      ></CampoTexto>

      <ComponenteBotao

        largura={90}
        funcao={calculaImc}
      ></ComponenteBotao>

      <ComponenteLista
        itens={listaMensagens}
      ></ComponenteLista>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#D2E6B5',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
