import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from '../context/BlogContext'
import BlogPostForm from "../component/BlogPostForm";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <View style={[styles.card, styles.shadowProp]}>
            <BlogPostForm
                onSubmit={(title, content) => {
                    addBlogPost(title, content, () => navigation.navigate('Blogs'))
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
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

export default CreateScreen;