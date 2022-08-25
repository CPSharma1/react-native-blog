import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';


const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();

      return () => {
        listener.remove()
      }
    })
  }, [])

  return (
    <>
      <View>
        <FlatList
          data={state}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
             <View style={[styles.card, styles.shadowProp]}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Blog', { id: item.id })}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>
                    {item.title}-{item.id}
                  </Text>

                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Image style={styles.trash} source={require('../Image/deleteIcon.png')} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
             </View>
            )
          }}
        />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
   
  },
  title: {
    fontSize: 18
  },
  trash: {
    width: 20,
    height: 20,
    fontSize: 30,
  },
  Blog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 20,
},
shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
})

export default IndexScreen