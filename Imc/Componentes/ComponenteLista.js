//questão 4
import React from "react";
import { StyleSheet, TextInput, View, Text } from 'react-native';


export default function ComponenteLista(props) {
    return (
        <View>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <FlatList
                data={props.lista}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.nome}</Text>
                )}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20
    },
    textInput: {
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        width: '70%',
        borderColor: 'black'
    },

})
