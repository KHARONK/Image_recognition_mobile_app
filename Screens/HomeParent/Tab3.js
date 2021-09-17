import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { welcome, login, image2, image3 } from "../../assets/images/image";

const Data = [
  { name: "african arts", image: `${login}` },
  { name: "african arts", image: `${login}` },
  { name: "african arts", image: `${image2}` },
  { name: "art work", image: `${image2}` },
  { name: "african arts", image: `${image2}` },
  { name: "art work", image: `${image3}` },
  { name: "art work", image: `${image3}` },
  { name: "african arts", image: `${image3}` },
];

function Card({ name, image }) {
  return (
    <View style={style.card}>
      <Text>{name}</Text>
      <Image style={style.image} source={{ uri: `${image}` }} />
    </View>
  );
}

function Tab1() {
  const renderItem = ({ item }) => <Card name={item.name} image={item.image} />;

  return (
    <View style={style.container}>
      <FlatList data={Data} numColumns="2" renderItem={renderItem} />
    </View>
  );
}

export default Tab1;

const style = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    height: "9rem",
    width: "7rem",
    margin: "20px",
  },
  container: {
    flex: 1,
  },
  image: {
    height: "9rem",
    width: "7rem",
  },
});
