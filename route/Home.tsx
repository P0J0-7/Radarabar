/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ImageBackground, Image, View} from 'react-native';
import Background from '../images/Background_color_main.png';

const BACKGROUND = Image.resolveAssetSource(Background).uri;

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: BACKGROUND}}
        style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            flex: 1,
            marginTop: 180,
            marginLeft: 35,
            fontSize: 32,
            color: 'black',
            fontWeight: 'bold',
          }}>
          On sort où ce soir ?
        </Text>
      </ImageBackground>
    </View>
  );
}
