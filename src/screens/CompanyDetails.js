import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import json from '../json/main.json'

export default CompanyDetails = (props) => {

    const countryId = props.navigation.getParam('countryId');
    const itemID = props.navigation.getParam('itemID');

    const companiesData = json.ItemCountryBrand

    const filterResultByName = (conId, itID) => {
        return companiesData.filter(company => {
            return company.Country === conId && company.ItemID === itID;
        })
    }

    return <View>
        <Text h4 style={{margin: 10, marginBottom: 10}}>Avaliable companies:</Text>
        <FlatList
            keyExtractor={(company) => company.Brand}
            data={filterResultByName(countryId, itemID)}
            renderItem={({ item }) => {
                return <View>
                    <View style={styles.texts}>
                        <Text style={styles.text} h4>{item.Brand}</Text>
                    </View>
                </View>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    texts: {
        marginHorizontal: 5,
        padding: 5,
        borderBottomWidth: 2
    },
    text: {
        padding: 5,
        marginBottom: 10
    }
})