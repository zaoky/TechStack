import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button: React.StatelessComponent<any> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.buttomStyle]} >
            <Text style={[styles.textStyle]} > {props.children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttomStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});

export { Button };