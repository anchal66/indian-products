import React from 'react';
import { Text, Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultList = (props) => {

    const filterResultById = (id) => {
        return props.itemList.filter(item => {
            return item.Type_ID === id;
        })
    }

    return <View>
        <Text
            h4
            style={styles.titleHead}>
            {props.electronicsList.Type_Name}:
        </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterResultById(props.electronicsList.Type_ID)}
            keyExtractor={(electronic) => electronic.Item_ID}
            renderItem={({ item }) => {
                return <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('List', { TypeId: item.Type_ID, ItemID: item.Item_ID })}
                    >
                        <Text style={styles.title}>{item.Item_Name}</Text>
                        <Image
                            containerStyle={styles.Img}
                            source={{ uri: item.Img }}
                            style={{ width: 200, height: 200 }}
                        />
                    </TouchableOpacity>
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
    },
    img:{

    }
})

export default withNavigation(ResultList);