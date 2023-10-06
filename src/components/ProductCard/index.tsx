import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';

interface ProductCardProps {
  productName: string;
  productPrice: number;
  productDescription: string;
}

const ProductCard: FC<ProductCardProps> = ({
  productName,
  productPrice,
  productDescription,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{productName}</Text>
      <Text>{productDescription}</Text>
      <Text style={styles.price}>Price: ${productPrice.toFixed(2)}</Text>
    </View>
  );
};

export default ProductCard;
