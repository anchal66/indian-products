import React, { useState } from 'react';
import { Text, SearchBar, ListItem, Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

export default HomeScreen = (props) => {

  const electronicsList = [
    {
      type: 'Electronics',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Television',
          img_url: 'https://images.samsung.com/is/image/samsung/in-fhdtv-n5200-ua32n5200arxxl-frontblack-184404442?$PD_GALLERY_L_JPG$',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Refrigerator',
          img_url: 'https://www.sathya.in/Media/Default/Thumbs/0029/0029034-lg-fridge-glb221argy.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Air Conditioner',
          img_url: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg',
        }
      ]
    },
    {
      type: 'Mobiles',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Nokia',
          img_url: 'https://static.toiimg.com/thumb/msid-74725805,width-220,resizemode-4,imgv-1/Nokia-83-5G.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Samsung',
          img_url: 'https://www.gizmochina.com/wp-content/uploads/2019/06/Galaxy-A60-featured-546x546.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Apple',
          img_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704',
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