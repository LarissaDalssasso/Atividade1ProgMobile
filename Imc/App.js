import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CampoTitulo from './Componentes/CampoTitulo';
import CampoTexto from './Componentes/CampoTexto';
import ComponenteBotao from './Componentes/ComponenteBotao';
import ComponenteLista from './Componentes/ComponenteLista';

export default function App() {
  const [altura, setAltura] = useState(0.0)
  const [mensagem, setMensagemAlt] = useState("")
  const [peso, setPeso] = useState(0.0)
  const [mensagem2, setMensagemPes] = useState("")

  function mostrarMensagemAlturaPeso() {
    setMensagemAlt("Altura: " + altura)
    setMensagemPes("Peso: " + peso)
  }
  return (
    <View style={styles.container}>
      <CampoTitulo
        titulo="IMC"
        cor='#465'
        tamanhoFonte={50}
        style={styles.container}
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
        largura={80}
        funcao={mostrarMensagemAlturaPeso}
      ></ComponenteBotao>
      <Text>{mensagem}</Text>
      <Text>{mensagem2}</Text>

      <ComponenteLista
      
      ></ComponenteLista>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff3 t',
      alignItems: 'center',
      justifyContent: 'center'
    }

});
