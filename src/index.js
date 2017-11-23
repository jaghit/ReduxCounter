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
                    <Text style={styles.counterText}>{this.props.CountReducer.count}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={() => { this.props.increment() }} underlayColor='rgba(0, 256, 0, 0.1)'>
                        <View style={[styles.buttonView, { backgroundColor: 'rgba(0, 256, 0, 0.5)' }]}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.decrement() }} underlayColor='rgba(256, 0, 0, 0.1)'>
                        <View style={[styles.buttonView, { backgroundColor: 'rgba(256, 0, 0, 0.5)' }]}>
                            <Text style={styles.buttonText}>-</Text>
                        </View>
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
