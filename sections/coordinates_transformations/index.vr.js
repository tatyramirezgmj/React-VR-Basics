import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Box } from 'react-vr';

class WelcomeToVR extends Component {
  render() {
  return (
      <View>
        <Pano source={asset('louvre-vr.jpg')}/>
        <Box
          dimWidth={0.3}
          dimHeigth={0.3}
          dimDepth={0.3}
          wireframe={true}
          style={{
            color:'#d22',
            transform:[
              {translate: [0, 0, -3]},
              {translateY:1},
              {translateX:-0.5},
              {rotateY: 45},
              {rotateZ: 45}
            ]
          }}
        />
      </View>
    )
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
