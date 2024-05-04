import React from "react";
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function CampoTexto(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInput}
                placeholder={props.sugestao}
                keyboardType={props.tipoTeclado}
                onChangeText={(TextoDigitado) => { props.funcao(TextoDigitado) }}//toda vez que terá uma alteração no texto ocorrerá isso
            >
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20
    },
    TextInput: {
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        width: '70%',
        borderColor: 'black'
    },
    
})

