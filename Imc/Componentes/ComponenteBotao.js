//questão 3
import React from "react";
import { Text, View, Button } from 'react-native';

export default function ComponenteBotao(props) {
    return (
        <View style={[{ width: props.largura }]}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Button
                color="#007"
                title="Calcular"
                tamanhoFonte={50}
                onPress={props.funcao()}
            />
        </View>
    )
}