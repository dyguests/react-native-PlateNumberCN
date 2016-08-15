/**
 * Created by fanhl on 2016/08/15.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableHighlight,
} from 'react-native';
import PlatNumPicker from './component/lin_platNumPicker/PlatNumPicker';

export default class PlateNumberCNDemo extends Component {


    render() {
        return (
            <View style={{marginTop: 22}}>
                <TouchableHighlight onPress={() => {
                    this.showPlatNumPicker(true)
                }}>
                    <Text>Show PlateNumPicker</Text>
                </TouchableHighlight>
                <PlatNumPicker
                    modalVisible={true}
                    onPlateNumberSelected={(city, letter)=> {
                        {/*alert(`${city}, ${letter}`);*/
                        }
                    }}
                />
            </View>
        );
    }

    showPlatNumPicker = ()=> {

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
});