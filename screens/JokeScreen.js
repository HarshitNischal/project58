import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class JokeScreen extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Patient: Doctor, I have a pain in my eye whenever I drink tea.
Doctor: Take the spoon out of the mug before you drink.</Text>
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