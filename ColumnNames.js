import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const { columnNames, columnNameText, colTitle, colAuthor, colUps, placeholder } = styles;


const ColumnNames = () => (
  <View style={columnNames}>
    <Text style={placeholder} />
    <Text style={[colTitle, columnNameText]}>Title</Text>
    <Text style={[colAuthor, columnNameText]}>Author</Text>
    <Text style={[colUps, columnNameText]}>Ups</Text>
  </View>
);

export default ColumnNames;
