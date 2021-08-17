import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class WeatherScreen extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Today, It is a bit rainy around India. Floods are heavy in Mumbai. The water is going even into the houses. In the 2 telugu states, there is a drizzle and even in the north side, It is rainy. So, if you are near to Mumbai, be safe!!!</Text>
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