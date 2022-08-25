import React, { useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  );

  return (
    <>
      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.text}> {blogPost.title}</Text>
          <Text style={styles.text1}> {blogPost.content}</Text>
        </View>
      </View>
    </>
  )
};


const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 25,
    marginBottom:10
  },
  text1:{
    fontSize: 20
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 50,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default ShowScreen;