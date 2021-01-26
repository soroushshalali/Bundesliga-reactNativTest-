import React, { useState } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Pressable, FlatList, SafeAreaView } from 'react-native';
import data from './data.json';


const Bundesliga = (props) => {
    const [flagShow, setFlagShow] = useState('');
    return (
        <View style={styles.container} >
            <FlatList
                data={data.bundesliga}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Pressable
                                onPress={() => {
                                    if (flagShow != item.id) {
                                        setFlagShow(item.id);
                                    } else {
                                        setFlagShow('');
                                    }
                                }} >
                                <View style={styles.title} >
                                    <Text style={styles.textTitle} >{item.title}</Text>
                                </View>
                            </Pressable>
                            <View style={[styles.textConrainer, { display: (flagShow == item.id) ? 'flex' : 'none' }]} >
                                <Text style={styles.mainText} >{item.des}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

export { Bundesliga };
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(182, 47, 47)',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    title: {
        backgroundColor: '#ddd',
        borderWidth: 4,
        borderColor: 'rgb(158, 158, 158)',
        marginVertical: 10,
        backgroundColor: 'rgb(182, 47, 47)',
        paddingLeft: 10,
        paddingVertical: 10,
        borderRadius: 5,
        color: 'rgb(255,255,255)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
    },
    textTitle: {
        color: 'rgb(255,255,255)',
    },
    textConrainer: {
        backgroundColor: 'rgb(200, 200, 200)',
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    mainText: {
        color: 'rgb(20,20,20)',
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 20,
    }
});