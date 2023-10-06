import {ScrollView, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {fetchCategoryProducts} from '../API';
import {ProductCard} from '../components';

export default function ({route}) {
  const {categoryId} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [warning, setWarning] = useState('');
  const [productList, setProductList] = useState([]);

  async function getProducts(catId) {
    const {products, error} = await fetchCategoryProducts(catId);
    if (products) {
      setProductList(products);
    } else setWarning(error)
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      getProducts(categoryId);
    }, [categoryId]),
  );

  if (isLoading) {
    return <Text> Loading . . . </Text>;
  }

  if (warning) {
    return <Text> {warning} </Text>;
  }

  return (
    <ScrollView>
      {productList.length === 0 && <Text>No products found</Text>}
      {productList.map(product => (
        <ProductCard
          key={product.id}
          {...{
            productName: product.name,
            productPrice: product.price,
            productDescription: product.description,
          }}
        />
      ))}
    </ScrollView>
  );
}
