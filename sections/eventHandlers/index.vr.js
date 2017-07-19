import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

class WelcomeToVR extends Component {
  constructor(){
    super();
    this.state={
      fontSize: 0.1,
    }
  }
  render() {
  return (
      <View>
        <Pano source={asset('louvre-vr.jpg')}/>
        <Text
          onEnter = {() => this.setState({fontSize: 0.2})}
          onExit = {()=> this.setState({fontSize: 0.1})}
          style={{
          fontSize: this.state.fontSize,
          transform:[{translate:[0 , 0, -2]}]
        }} >
          Hover over me!
        </Text>
      </View>
    )
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
