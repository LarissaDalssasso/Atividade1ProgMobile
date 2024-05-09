import React from "react";
import { Button } from 'react-native';

export default function ComponenteBotao(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Button style={[
            { width: props.largura },
            { fontSize: props.tamanhoFonte },
            { color: props.cor }
      
        ]}>{props.titulo}</Button>
        </View> 

    )
}
