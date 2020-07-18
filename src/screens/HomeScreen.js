import React, { useState } from 'react';
import { Text, SearchBar, ListItem, Image } from 'react-native-elements';
import json from '../json/main.json'
import { View, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

export default HomeScreen = (props) => {

  const electronicsList = json.Type
  const itemList = json.TypeItem;

  const [search, setSearch] = useState('')
  return <View>
    <ScrollView>
      {/* <SearchBar
        platform='ios'
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      /> */}
      <Text h3 style={styles.title}>Categories</Text>
      <ResultList electronicsList={electronicsList[0]} itemList={itemList}/>
      <ResultList electronicsList={electronicsList[1]} itemList={itemList}/>
      <ResultList electronicsList={electronicsList[2]} itemList={itemList}/>
    </ScrollView>
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