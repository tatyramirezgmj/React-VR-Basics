import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

class Row extends Component{
  render() {
    return(
      <View style={[{backgroundColor: this.props.color}, styles.row]}>
        <Text style={styles.text}>{this.props.color}</Text>
      </View>
    )
  }
}

class WelcomeToVR extends Component {
  constructor(){
    super();

    this.state = {
      flexDirectionIsRow: true
    }

    setInterval(() => {
      this.setState({flexDirectionIsRow: !this.state.flexDirectionIsRow})
    }, 2000);
  }
  render() {

    let flexDirection = this.state.flexDirectionIsRow ? 'row' : 'column';

  return (
      <View style={[styles.container, {flexDirection: flexDirection}]}>
        <Pano source={asset('louvre-vr.jpg')}/>
        <Row color='red'/>
        <Row color='blue'/>
        <Row color='green'/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 0.2,
    textAlign: 'center',
  },
  row:{
    width:0.5,
    height:0.3,
    margin: 0.1,
  },
  container:{
    flex: 1,
    width: 2,
    alignItems: 'center',
    transform: [{translate: [-1, 0, -3]}]
  }
})

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);