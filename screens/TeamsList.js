import React from 'react';
import { Text, View, FlatList, StyleSheet, Pressable } from 'react-native';
import data from './data.json'

const TeamsList = (props) => {
    return (
        <View style={styles.container} >
            <FlatList
                data={data.teams}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => props.navigation.navigate('Team', { id: item.id })} >
                            <View style={styles.item} >
                                <Text style={styles.itemText} >{item.name}</Text>
                            </View>
                        </Pressable>
                    );
                }}
                // ItemSeparatorComponent={()=>{
                //     return(
                //         <Text>test</Text>
                //     );
                // }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Text></Text>
                        </View>
                    );
                }}
            // horizontal
            // numColumns={2}
            />
        </View>
    );
}
export { TeamsList };
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(182, 47, 47)',
        height: '100%',
        alignItems: 'center',
    },
    item: {
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
    itemText: {
        fontSize: 20,
        color: 'rgb(255,255,255)'
    },
});