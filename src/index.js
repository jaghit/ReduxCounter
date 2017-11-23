import React, { Component } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import styles from './index.style';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>{this.props.count}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={() => { this.props.increment() }}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.decrement() }}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default connect(({ CountReducer }) => ({ CountReducer }), {
    increment,
    decrement
})(Counter);
