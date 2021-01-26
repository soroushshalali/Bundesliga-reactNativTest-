import React from 'react';
import { Text, View, FlatList, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import data from './data.json'

const Team = (props) => {
    let id = props.route.params.id - 1;
    return (
        <View style={styles.container} >
            <Text>{data.teams[id].name}</Text>
            <ScrollView style={{}} >
                <View style={{ alignItems: 'center' }} >
                    <Image
                    resizeMode='contain'
                    style={styles.logo} source={{ uri: data.teams[id].logo }} />
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.desText} >{data.teams[id].des}</Text>
                </View>
            </ScrollView>
        </View>
    );
}
export { Team };
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 130,
        marginVertical: 20
    },
    textContainer: {
        padding: 7,
    },
    desText: {
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
});