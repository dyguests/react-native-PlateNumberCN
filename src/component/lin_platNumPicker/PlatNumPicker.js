/**
 * 车牌号选择器
 *
 * Created by fanhl on 2016/8/15.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class PlatNumPicker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>PlatNumPicker</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});