import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class HoroScopeScreen extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>This week is an amazing one for you. You will make your dreams come true. Keep working with connfidence and there will be nothing you cannot achieve!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop:100,
    },
});