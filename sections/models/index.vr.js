import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Model } from 'react-vr';

class WelcomeToVR extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('louvre-vr.jpg')}/>
        <Model
          source={{obj: asset('tree.obj')}}
          style={{transform: [{translate: [0, -5, -10]}]}}
          texture={'http://i.imgur.com/14HMTcQb.jpg'}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
