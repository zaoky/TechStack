import * as React from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';

const CardSection: React.StatelessComponent<any> = (props) => {
    return (
        <View style={[styles.containerStyle]} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});

export { CardSection };