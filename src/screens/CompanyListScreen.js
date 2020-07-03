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
                'Samsung',
                'Onida',
                'Sony'
            ]
        },
        {
            id: Math.floor(Math.random() * 9999).toString,
            name: 'Refrigerator',
            img_url: 'https://www.sathya.in/Media/Default/Thumbs/0029/0029034-lg-fridge-glb221argy.jpg',
            payload: [
                'Samsung',
                'Whirpool',
                'Fridge'
            ]
        },
        {
            id: Math.floor(Math.random() * 9999).toString,
            name: 'Air Conditioner',
            img_url: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg',
            payload: [
                'Volats',
                'Ac',
                'SUper Ac'
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
                    <Text h3>{item.name}:</Text>
                    {item.payload.map((item, id) => <TouchableOpacity
                     key={id}
                     onPress={()=>props.navigation.navigate('Details', { id: item })}
                     >
                        <Text h5
                            style={{ margin: 10, padding: 10 }}>{item}</Text>
                    </TouchableOpacity>)
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
    }
})