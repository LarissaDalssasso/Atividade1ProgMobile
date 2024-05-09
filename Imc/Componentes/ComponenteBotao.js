//questão 3
import React from "react";
import { View, Button } from 'react-native';

export default function ComponenteBotao(props) {
    return (
        <View style={[
            { width: props.largura },
            { marginTop: 20}
        ]}>
            <Button
                color="#93A872"
                title="Calcular"
                tamanhoFonte={50}
                onPress={props.funcao}
            />
        </View>
    )
}