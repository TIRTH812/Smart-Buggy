import {ViroARSceneNavigator} from '@viro-community/react-viro';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import ARScene from './ARScene';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';

const ARPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{uri: ''}}
        style={{flex: 1}}
        allowsInlineMediaPlayback
        mediaCapturePermissionGrantType="grant"
        setSupportMultipleWindows={false}
      />
    </SafeAreaView>
  );
};

export default ARPage;
