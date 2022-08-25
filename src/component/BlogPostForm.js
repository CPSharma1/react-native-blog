import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.lable}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.lable}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title,content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues:{
    title:'',
    content:''
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'skyblue',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius:20
  },
  lable: {
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;