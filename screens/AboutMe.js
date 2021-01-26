import React from 'react';
import { Text, View, StyleSheet, Pressable, Linking } from 'react-native';
// import { exp } from 'react-native/Libraries/Animated/src/Easing';


const AboutMe = () => {
    return (
        <View style={styles.container} >
            <Pressable
            onPress={() => Linking.openURL('https://soroush-shalali-homepage.netlify.app/')}
            >
                <View style={styles.linkPages}  >
                    <Text style={styles.textLink} >My HomePage</Text>
                </View>
            </Pressable>
            <Pressable
            onPress={() => Linking.openURL('mailto:soroushshalali@gmail.com?subject=...(BundesligaApp)')}
            // mailto:<receiver_email>?subject=<subject>&body=<body>&cc=<emails_to_copy></emails_to_copy>
            >
                <View style={styles.linkPages}  >
                    <Text style={styles.textLink} >Send E-Mail</Text>
                </View>
            </Pressable>
        </View>
    );
}


export { AboutMe };

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
        fontFamily: 'Inter-Regular',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(182, 47, 47)',
        height: '100%'
    },
});