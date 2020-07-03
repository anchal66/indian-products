import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default CompanyDetails = (props) => {

    const name = props.navigation.getParam('id'); 

    const companiesData = [
        {
            name: 'Samsung',
            location:'New York',
            started:'1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company'
        },
        {
            name: 'Onida',
            location:'New York',
            started:'1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company'
        },
        {
            name: 'Sony',
            location:'New York',
            started:'1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company'
        },
        {
            name: 'Whirpool',
            location:'New York',
            started:'1995',
            amount: '10 milion dollars',
            bio: 'Very Nice company'
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
                    <Text h5>Name: {item.name}:</Text>
                    <Text h5>Located in: {item.location}:</Text>
                    <Text h5>Company Started: {item.started}:</Text>
                    <Text h5>Net Worth: {item.amount}:</Text>
                    <Text h5>{item.bio}:</Text>
                </View>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
})