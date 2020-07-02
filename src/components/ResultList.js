import React from 'react';
import { Text,Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default ResultList = (props) => {

    return <View>
        <Text
            h4
            style={styles.titleHead}>
            {props.electronicsList.type}:
        </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.electronicsList.payload}
            keyExtractor={(electronic) => electronic.name}
            renderItem={({ item }) => {
                return <View style={styles.container}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Image
                        source={{ uri: item.img_url }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 5
    },
    titleHead: {
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 15
    }
})