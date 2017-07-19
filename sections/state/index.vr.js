import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

class WelcomeToVR extends Component {
  constructor(){
    super();

    this.state = {
      showSign:true
    };
    setInterval(()=> this.setState({showSign: !this.state.showSign}), 1000)
  }

  render() {
    let message = this.state.showSign === true ? "Welcome to VR land" : " ";

    return (
      <View>
        <Pano source={asset('louvre-vr.jpg')}/>
        <Text style={{fontSize: 0.2, transform: [{translate: [-1, 0, -2]}]}}>{message}</Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
