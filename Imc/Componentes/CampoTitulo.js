// questão 1
import React from "react";
import { Text } from 'react-native';


export default function CampoTitulo(props) {
    return (
        <Text style={[
            { color: props.cor },
            { fontSize: props.tamanhoFonte }
        ]}>{props.titulo}</Text>
    )
}
