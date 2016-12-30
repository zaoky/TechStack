import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

interface ILibrary {
    id: number;
    title: string;
    description: string;
}

interface IListItem {
    library: ILibrary;
    selectLibrary: (libraryId: any) => any;
    selectedLibraryId: number;
    expanded: boolean;
}


class ListItem extends React.Component<IListItem, any>{

    componentWillUpdate() {
        LayoutAnimation.spring({
            create:{
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.opacity
            },
            update:{
                type: LayoutAnimation.Types.easeInEaseOut
            },
            duration: 2000
        });
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
                >
                <View>
                    <CardSection>
                        <Text style={[styles.titleStyle]} >{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state: any, ownProps: IListItem) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default connect(mapStateToProps, actions)(ListItem);