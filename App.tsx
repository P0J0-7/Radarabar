/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainMenu from './MainMenu';


import {
  StyleSheet,
  Text,
  View,
  ImageBackground, 
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Background from './images/Background_color_main.png';

const BACKGROUND = Image.resolveAssetSource(Background).uri;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: BACKGROUND}}
        style={{flex: 1, marginTop:-100 ,justifyContent: 'center'}}>
        <Text
          style={{
            flex: 1,
            marginTop: 250,
            marginLeft: 35,
            fontSize: 32,
            color: 'black',
            fontWeight: 'bold',
          }}>
          On sort où ce soir ?
        </Text>
        <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Adresse mail"
            placeholderTextColor="grey"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mot de passe"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Main')} >
          <Text style={{color: 'lightgrey', fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginTop: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#701E3A",
  },
});

