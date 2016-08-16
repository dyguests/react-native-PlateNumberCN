/**
 * Created by fanhl on 2016/08/15.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import PlatNumPicker from './component/lin_platNumPicker/PlatNumPicker';
// const Modal = require('react-native-modalbox');
import PlatNumBottom from './component/lin_platNumPicker/PlatNumBottom';

export default class PlateNumberCNDemo extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShowPlatNumPicker: false,
        };
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <TouchableHighlight onPress={this.showPlatNumPicker}>
                    <Text>Show PlateNumPicker</Text>
                </TouchableHighlight>
                <PlatNumBottom
                    visible={this.state.isShowPlatNumPicker}
                    outTouchProcess={()=> {
                        this.setState({
                            isShowPlatNumPicker: false,
                        });
                    }}
                    selectedProcess={(city, letter)=> {
                        this.setState({
                            isShowPlatNumPicker: false,
                        });
                        alert(`${city},${letter}`)
                    }}
                />
            </View>
        );
    }

    showPlatNumPicker = ()=> {
        this.setState({
            isShowPlatNumPicker: true,
        });
    };
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

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal4: {
        height: 300,
    },
});