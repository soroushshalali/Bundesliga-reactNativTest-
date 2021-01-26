import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Pressable, ImagePropTypes } from 'react-native';


const Home = (props) => {
    return (
        <View style={styles.container} >
            <Pressable onPress={() => props.navigation.navigate('Bundesliga')} >
                <View style={styles.linkPages} >
                    <Text style={styles.textLink} >Bundesliga</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('Teams')} >
                <View style={styles.linkPages} >
                    <Text style={styles.textLink} >Teams</Text>
                </View>
            </Pressable>
            {/* <Pressable onPress={() => props.navigation.navigate('Records')} >
                <View style={styles.linkPages} >
                    <Text style={styles.textLink} >Records</Text>
                </View>
            </Pressable> */}
            <Pressable onPress={() => props.navigation.navigate('AboutMe')} >
                <View style={styles.linkPages} >
                    <Text style={styles.textLink} >About Me</Text>
                </View>
            </Pressable>
        </View>
    );
}

export { Home };
const styles = StyleSheet.create({
    linkPages: {
        backgroundColor: '#ddd',
        width: 200,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 10,
        backgroundColor: ' rgb(158, 158, 158)',
        paddingVertical: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textLink: {
        fontSize: 23,
        color: 'rgb(255,255,255)',
        fontFamily:'Inter-Regular',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(182, 47, 47)',
        height: '100%'
    },
});