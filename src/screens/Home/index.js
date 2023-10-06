import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export default function ({navigation}) {
  function goToProducts(categoryId) {
    navigation.navigate('ProductListingScreen', {categoryId});
  }

  return (
    <View style={style.container}>
      <View style={style.textSection}>
        <Text style={style.text}>Welcome, Select a Category!</Text>
      </View>
      <View style={style.categorySection}>
        <Icon size={100} onPress={() => goToProducts('redhat')} name="redhat" />
        <Icon
          size={100}
          onPress={() => goToProducts('tshirt')}
          name="tshirt-crew-outline"
        />
        <Icon
          size={100}
          onPress={() => goToProducts('briefcase')}
          name="briefcase"
        />
        <Icon
          size={100}
          onPress={() => goToProducts('cake')}
          name="cake-variant-outline"
        />
        <Icon size={100} onPress={() => goToProducts('bow')} name="bow-arrow" />
      </View>
    </View>
  );
}
