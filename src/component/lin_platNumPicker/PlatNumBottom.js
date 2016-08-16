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
    Modal,
    TouchableOpacity,
} from 'react-native';
import PlatNumPicker from './PlatNumPicker';

export default class PlatNumBottom extends Component {
    static defaultProps = {
        text: false,
    };

    static propTypes = {
        visible: React.PropTypes.bool,
        outTouchProcess: React.PropTypes.func.isRequired,
        selectedProcess: React.PropTypes.func.isRequired,
    };

    // 构造
    constructor(props) {
        super(props);

        let {
            visible,
        }=this.props;
        // 初始状态
        this.state = {
            visible,
        };
    }

    render() {
        let {
            visible,
            outTouchProcess,
            selectedProcess,
        }=this.props;
        return (
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.outside}
                        onPress={()=> {
                            //alert(3);
                            outTouchProcess && outTouchProcess();
                            this.setState({
                                visible: false,
                            });
                        }}
                    >
                        <View/>
                    </TouchableOpacity>
                    <PlatNumPicker
                        modalVisible={true}
                        onPlateNumberSelected={(city, letter)=> {
                            this.setState({
                                visible: false,
                            });
                            //alert(`${city},${letter}`)
                            selectedProcess && selectedProcess(city, letter);
                        }}
                    />
                </View>
            </Modal>
        );
    }

    componentWillReceiveProps = (nextProps)=> {
        // console.log('PlatNumBottom componentWillReceiveProps = (nextProps)=> {');
        // console.log(nextProps);

        let {
            visible
        }=nextProps;

        // 初始状态
        this.setState({
            visible: visible ? visible : this.state.visible,
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    outside: {
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
});