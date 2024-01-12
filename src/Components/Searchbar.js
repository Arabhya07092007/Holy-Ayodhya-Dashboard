import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Backdrop, Search } from '../svgIcons';

const SearchBar = ({ onBackPress, onSearchPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress}>
                <Backdrop />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Search location"
                placeholderTextColor="#888"
            />

            <TouchableOpacity onPress={onSearchPress}>
                <Search />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        // paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 10,
        elevation: 3,
        // padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        // elevation: 5,
        // position: 'fixed',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        padding: 10
    },
});

export default SearchBar;
