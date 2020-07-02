import React, { useState } from 'react';
import { Text, SearchBar, ListItem, Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

export default HomeScreen = () => {

  const electronicsList = [
    {
      type: 'Electronics',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Television',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Refrigerator',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Air Conditioner',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        }
      ]
    },
    {
      type: 'Mobiles',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Nokia',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Samsung',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Apple',
          img_url: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
        }
      ]
    },
  ]

  const [search, setSearch] = useState('')
  return <View>
    <ScrollView>
      <SearchBar
        platform='ios'
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
      <Text h3 style={styles.title}>Categories</Text>
      <ResultList electronicsList={electronicsList[0]} />
      <ResultList electronicsList={electronicsList[1]} />
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