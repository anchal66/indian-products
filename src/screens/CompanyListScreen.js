import React, { useState } from 'react';
import { Text, SearchBar, ListItem, Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default CompanyListScreen = (props) => {
    const id = props.navigation.getParam('id');

    const companyList = [
        {
            id: Math.floor(Math.random() * 9999).toString,
            name: 'Television',
            img_url: 'https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX425_.jpg',
            payload: [
                { name: 'Samsung', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'Onida', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'Sony', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' }
            ]
        },
        {
            id: Math.floor(Math.random() * 9999).toString,
            name: 'Refrigerator',
            img_url: 'https://www.sathya.in/Media/Default/Thumbs/0029/0029034-lg-fridge-glb221argy.jpg',
            payload: [
                { name: 'Samsung', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'LG', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'Whirpool', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
            ]
        },
        {
            id: Math.floor(Math.random() * 9999).toString,
            name: 'Air Conditioner',
            img_url: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg',
            payload: [
                { name: 'Voltas', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'Hitachi', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' },
                { name: 'Samsung', img: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg' }
            ]
        }
    ]
    const filterResultByPrice = (name) => {
        return companyList.filter(company => {
            return company.name === name;
        })
    }
    const viewList = <View>
        <FlatList
            keyExtractor={(company) => company.name}
            data={filterResultByPrice(id)}
            renderItem={({ item }) => {
                return <View>
                    <Text h3 style={{marginBottom: 15}}>{item.name}:</Text>
                    {item.payload.map((item, id) => <ScrollView 
                            key={id}>
                        <TouchableOpacity
                            style={styles.list}
                            onPress={() => props.navigation.navigate('Details', { id: item.name })}
                        >
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: 100, height: 50 }}
                            />
                            <Text h5
                                style={{ margin: 10, padding: 10 }}>{item.name}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    )
                    }
                </View>
            }}
        />
    </View>

    const [search, setSearch] = useState('')
    return <View>
        <SearchBar
            platform='ios'
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
        />
        <View>
            {filterResultByPrice(id) ? viewList : null}
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    list: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})