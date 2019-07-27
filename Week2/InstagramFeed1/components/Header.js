import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.iconInbox} />
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                    }}
                    style={styles.logoInstagram}
                    // resizeMode="contain"
                />
                <Feather name="inbox" style={styles.iconInbox} onPress={() => { alert('ChatBox') }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight,
    },
    logoInstagram: {
        flex: 1,
        width: null,
        height: 44,
        marginVertical: 5,
        resizeMode: 'contain'
    },
    iconInbox: {
        width: 30,
        fontSize: 27,
        color: '#000',
    }
})