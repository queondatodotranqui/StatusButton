import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Mood extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      moods: ['fine 😁', 'angry 😡', 'gloomy 😞'],
      colors: ['#4356c9', '#c42138', '#00001a'],
      currentMood: 0
    }

    this.changeMood = this.changeMood.bind(this)
    this.setColor = this.setColor.bind(this)
  }

  changeMood(){
    if(this.state.currentMood < 2){
      this.setState((prevState)=>{
        return {currentMood:prevState.currentMood + 1}
      })
    } else {
      this.setState((prevState)=>{
        return {currentMood:0}
      })
    }
  }

  setColor(value){
    const { colors } = this.state

    return {
      flex: 1,
      backgroundColor: colors[value],
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  render(){
    const { moods , currentMood } = this.state

    return(
      <View style={this.setColor(currentMood)}>
        <View style={styles.box}>
          <Button 
            title={`You are feeling ${moods[currentMood]}`}
            onPress={this.changeMood}
            color="#2f3436"
          />
        </View>
        <Text style={styles.text}>Touch the box to change it!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

export default function App() {
  return (
    <Mood />
  );
}

const styles = StyleSheet.create({
  statusText:{
    color:'white',
    fontSize:24,
    textAlign:'center',
    lineHeight:50
  },
  text:{
    marginTop:20,
    color:'white',
    fontSize:19
  },
  box:{
    shadowColor:'white',
    borderRadius:6,
    width:300
  }
});
