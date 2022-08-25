import React, { useContext, useState } from "react";
import { StyleSheet,View } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === id
  );
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop())
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical:50,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default EditScreen;