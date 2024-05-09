//questão 4
import React from "react";
import { FlatList, Text, View, StyleSheet } from 'react-native';

function desenhaItem(item) {
    return (
        <View>
            <Text>
                {item}
            </Text>
        </View>
    )
}

export default function ComponenteLista(props) {
    return (
        <FlatList
            data={props.itens}
            renderItem={({ item }) => desenhaItem(item)}
        />
    );
}


