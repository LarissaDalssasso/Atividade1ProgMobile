import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CampoTitulo from './Componentes/CampoTitulo';
import CampoTexto from './Componentes/CampoTexto';
import ComponenteBotao from './Componentes/ComponenteBotao';

export default function App() {
  const [altura, setAltura] = useState(0.0)
  const [mensagem2, setMensagem2] = useState("")
  function mostrarMensagemAltura() {
    setMensagem("Altura: " + altura)
  } 

  const [peso, setPeso] = useState(0.0)
  const [mensagem, setMensagem] = useState("")
  function mostrarMensagemPeso() {
    setMensagem("Peso: " + peso)
  }
  return (
    <View>
      {<CampoTitulo
        titulo="Informação"
        cor='#465'
        tamanhoFonte={50}
        style={styles.container}
      ></CampoTitulo>}

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


    </View>
  );


}
<Button
  largura={3}
  tamanhoFonte={50}
  cor='#465'
  onPress={mostrarMensagemAltura}
/>


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    TextAlign: 'center'
  },

});
