import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default CompanyDetails = (props) => {

    const name = props.navigation.getParam('id');

    const companiesData = [
        {
            name: 'Samsung',
            location: 'New York',
            started: '1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company',
            img: 'https://wallpaperaccess.com/full/85193.jpg'
        },
        {
            name: 'Onida',
            location: 'New York',
            started: '1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company',
            img: 'https://wallpaperaccess.com/full/85193.jpg'
        },
        {
            name: 'Sony',
            location: 'New York',
            started: '1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company',
            img: 'https://wallpaperaccess.com/full/85193.jpg'
        },
        {
            name: 'Whirpool',
            location: 'New York',
            started: '1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company',
            img: 'https://wallpaperaccess.com/full/85193.jpg'
        }
    ]

    const filterResultByName = (name) => {
        return companiesData.filter(company => {
            return company.name === name;
        })
    }

    return <View>
        <FlatList
            keyExtractor={(company) => company.name}
            data={filterResultByName(name)}
            renderItem={({ item }) => {
                return <View>
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: '100%', height: 200,marginBottom:15 }}
                    />
                    <View style={styles.texts}>
                        <Text style={styles.text} h4>Name: {item.name}</Text>
                        <Text style={styles.text} h5>Located in: {item.location}</Text>
                        <Text style={styles.text} h5>Company Started: {item.started}</Text>
                        <Text style={styles.text} h5>Net Worth: {item.amount}</Text>
                        <Text style={styles.text}>{item.bio}</Text>
                    </View>
                </View>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    texts:{
        marginHorizontal:5,
        padding: 10
    },
    text:{
        padding:5,
        marginBottom: 10
    }
})