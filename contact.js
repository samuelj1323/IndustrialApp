import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Linking,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  window,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Andon_background from './images/Andon_Background.jpeg';
import Andon_logo from './images/logo.png';
import {NavigationContainer} from '@react-navigation/native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
// This is for the contact page.
export default class Contact extends Component {
  createMapLink = (addressStr, mapProvider) => {
    if (mapProvider === 'apple') {
      return `http://maps.apple.com/?q=${addressStr}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${addressStr}`;
  };

  openNavigationApp = (addressStr) => {
    const mapProvider = Platform.OS === 'ios' ? 'apple' : 'google';
    const mapLink = this.createMapLink(addressStr, mapProvider);

    Linking.openURL(mapLink).catch((err) =>
      console.error('An error occurred', err),
    );
  };
  render() {
    return (
      <View style={styles.screen}>
        <Image source={Andon_logo} />
        <View style={{height: 20}} />
        <View style={styles.window}>
          <ImageBackground style={styles.image} source={Andon_background}>
            <Text style={styles.header}>
              We'd love to get in contact with you!
            </Text>
          </ImageBackground>
        </View>
        <View style={{height: 10}} />
        <View style={styles.box}>
          <Text
            style={{
              color: 'grey',
              fontSize: 18,
              textAlign: 'left',
              margin: 10,
            }}>
            Phone:{' '}
            <Text
              style={{color: 'red', textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL(`tel:${7137919800}`)}>
              (713) 791-9800
            </Text>
          </Text>

          <View style={{justifyContent: 'center', margin: 10}}>
            <Text style={{color: 'grey', fontSize: 18}}>
              Website:
              <Text
                style={{color: 'red', textDecorationLine: 'underline'}}
                onPress={() => Linking.openURL('http://Andon.com')}>
                {' '}
                Andon.com
              </Text>
            </Text>
          </View>
          <Text style={{color: 'grey', fontSize: 18, margin: 10}}>
            Address:
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                textDecorationLine: 'underline',
              }}
              onPress={() =>
                this.openNavigationApp(
                  '2720 Reed Rd Ste. 280, Houston, TX 77051',
                )
              }>
              2720 Reed Rd Ste. 280, Houston, TX
            </Text>
          </Text>
        </View>
        <View style={{height: 220}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  window: {
    alignContent: 'center',
    textAlign: 'left',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: screenWidth,
  },
  header: {
    textAlign: 'left',
    fontSize: 36,
    color: 'white',
    fontStyle: 'normal',
    marginHorizontal: 10,
  },
  box: {
    width: screenWidth - 20,
    height: 120,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10,
  },
});
