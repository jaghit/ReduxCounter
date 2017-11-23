import React, { Component } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import styles from './index.style';

class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>0</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={() => { alert('Increment') }}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { alert('Decrement') }}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default Counter;
