/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ImageBackground,Image, View} from 'react-native';
import Logo from '../images/Radarabar_logo_P.png';
import Background from '../images/Background_color_main.png';

const LOGO = Image.resolveAssetSource(Logo).uri;
const BACKGROUND = Image.resolveAssetSource(Background).uri;

export default function Home() {
  return (
    <View style={{padding: 20, backgroundColor: '#F8F8F8'}}>
      <ImageBackground resizeMode="cover" source={{uri: BACKGROUND}}>
        <Image style={{width: 300, height: 100}} source={{uri: LOGO}} />
        <Text
          style={{
            padding: 10,
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
