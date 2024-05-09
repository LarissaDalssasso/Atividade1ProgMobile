import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CampoTitulo from './Componentes/CampoTitulo';
import CampoTexto from './Componentes/CampoTexto';
import ComponenteBotao from './Componentes/ComponenteBotao';
import ComponenteLista from './Componentes/ComponenteLista';

export default function App() {
  const [altura, setAltura] = useState(0.0)
  const [mensagem, setMensagem] = useState("")
  function mostrarMensagemAltura() {
    setMensagem("Altura: " + altura)
  }

  const [peso, setPeso] = useState(0.0)
  const [mensagem2, setMensagem2] = useState("")
  function mostrarMensagemPeso() {
    setMensagem2("Peso: " + peso)
  }
  return (
    <View>
      {<CampoTitulo
        titulo="IMC"
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
      <Button
        largura={3}
        tamanhoFonte={50}
        cor='#465'
        onPress={mostrarMensagemAltura} />
      <Text>{mensagem}</Text>
      <CampoTexto
        titulo="Peso"
        sugestao="Ex: 75.3"
        tipoTeclado='numeric'
        funcao={setPeso}
      ></CampoTexto>
      <Button
        largura={3}
        tamanhoFonte={50}
        cor='#465'
        onPress={mostrarMensagemPeso} />
      <Text>{mensagem2}</Text>

    </View>

  );

}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    TextAlign: 'center'
  },

});
