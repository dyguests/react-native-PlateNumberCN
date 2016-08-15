/**
 * 车牌 底部弹出栏
 *
 * Created by fanhl on 16/8/15.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class PlatNumBottom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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