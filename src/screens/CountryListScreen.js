import React, { useState } from 'react';
import { Text, SearchBar } from 'react-native-elements';
import json from '../json/main.json'
import { View, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default CountryListScreen = (props) => {

    const typeId = props.navigation.getParam('TypeId');
    const itemID = props.navigation.getParam('ItemID');

    const companiesData = json.ItemCountryBrand
    const coutryList = json.Country;

    const filterResultByType = (itemID) => {
        return coutryList.filter((country) => {
             let typeByCountry =  companiesData.filter(company=>{
                return company.ItemID === itemID && company.Country === country.CountryID
            });
            if(typeByCountry.length > 0)
                return true
            else 
                return false
        })
    }

    const viewList = <View>
        <Text h4 style={{margin: 10}}>Select country:</Text>
        <FlatList
            keyExtractor={(country) => country.CountryName}
            data={filterResultByType(itemID)}
            renderItem={({ item }) => {
                return <View>
                    <TouchableOpacity
                        style={styles.list}
                        onPress={() => props.navigation.navigate('Details', { countryId: item.CountryID, itemID })}
                    >
                        <Text h4 style={{ marginBottom: 15 }}>{item.CountryName}</Text>
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>

    const [search, setSearch] = useState('')
    return <View>
        {/* <SearchBar
            platform='ios'
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
        /> */}
        <View>
            {viewList}
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    list: {
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 15,
        padding: 5,
        borderBottomWidth: 2
    }
})