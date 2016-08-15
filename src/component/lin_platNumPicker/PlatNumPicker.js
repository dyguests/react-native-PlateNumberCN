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
    TouchableOpacity,
} from 'react-native';

export default class PlatNumPicker extends Component {
    static propTypes = {
        // autoPlay: React.PropTypes.bool.isRequired,
        // maxLoops: React.PropTypes.number.isRequired,
        /**
         * (city,letter)=>{}
         */
        onPlateNumberSelected: React.PropTypes.func.isRequired,
    };

    city = ["川", "陕", "贵", "粤", "京", "沪", "津", "渝", "宁", "琼", "皖",
        "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘",
        "晋", "蒙", "吉", "闽", "青", "藏"];

    letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", ""];

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectStep: 'city',//'city','letter',
            selectedCity: undefined,
        };
    }

    render() {
        let {
            selectStep,
        }=this.state;

        let list;
        if (selectStep == 'city') {
            list = this.city;
        } else {
            list = this.letter;
        }


        let lineList = [];

        let linesUI = [];

        for (let i = 0; i < list.length; i++) {
            lineList.push(list[i]);
            //每8个一行
            if (lineList.length == 8 || i == list.length - 1) {
                // console.log('if (lineList.length == 8 || i == list.length - 1) {');
                // console.log(lineList);
                linesUI.push(this.renderLine(lineList));
                lineList = [];
            }
        }

        return (
            <View style={styles.container}>
                {linesUI}
            </View>
        );
    }

    renderLine = (lineList)=> {
        let itemsUI = [];

        for (let i = 0; i < 8; i++) {
            itemsUI.push(this.renderItem(lineList.length > i ? lineList[i] : undefined, i));
        }

        return (
            <View
                key={lineList.toString()}
                style={styles.line}
            >
                {itemsUI}
            </View>
        );
    };

    renderItem = (item, columnIndex)=> {
        return (
            <TouchableOpacity
                key={columnIndex}
                style={[styles.item, columnIndex == 7 && styles.itemRight]}
                onPress={this.onPress.bind(this, item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };

    onPress = (item)=> {
        console.log('PlatNumPicker onPress:', item);

        let {
            selectStep,
            selectedCity,
        }=this.state;

        let {
            onPlateNumberSelected,
        }=this.props;

        let list;
        if (selectStep == 'city') {
            this.setState({
                selectStep: 'letter',
                selectedCity: item,
            });
        } else {
            onPlateNumberSelected && onPlateNumberSelected(selectedCity, item);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B6B6B6',
    },
    line: {
        flexDirection: 'row',
        height: 48,
    },
    item: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        marginRight: 1,
    },
    itemRight: {
        marginRight: 0,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});