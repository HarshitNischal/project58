import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class NewsScreen extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Covid-19 Spreads across the world in a rapid way. Many of he green zones turned into containment zones. Search for vaccine is on the way while a new virus from china is rapidly spreading by lies. Stay Home Stay Safe. Singing off now. For latest updates, please visit India Today</Text>
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