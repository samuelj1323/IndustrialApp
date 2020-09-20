import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// This is the app I am building.
/**
 *
 * To do for this page:
 * Create a stack navigation for the contact information.
 * ask if they want the stack, but have it anyways
 * Create a flatlist of the images each being a link
 * have verbiage from company at bottom
 * make contact us button appropriate type and all.
 * maybe look into having a menu button on every page.
 *
 *
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Button,
  Linking,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewReq from './screens/NewReq';
import NewQuestion from './screens/newQuestion';
import Contact from './screens/contact';
import AndonLogo from './screens/images/logo.png';
import AndonB from './screens/images/AndonHome.jpeg';

import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
function HomeScreen({navigation}) {
  return (
    <View style={styles.homeBackground}>
      <View
        style={{
          position: 'absolute',
          right: 30,
          top: 50,
        }}>
        <Button title="Menu" onPress={() => navigation.openDrawer()} />
      </View>

      <Image source={AndonLogo} />
      <View style={{height: 20}} />
      <View style={styles.window}>
        <ImageBackground style={styles.image} source={AndonB}>
          <Text style={{fontSize: 36, color: 'white'}}>
            Welcome to Andon Specialties
          </Text>
        </ImageBackground>
      </View>

      <Text style={{fontSize: 16}}> Our Key contributors:</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://aes-energyservices.com')}>
          <Image
            resizeMode="contain"
            style={{width: 150, height: 150}}
            source={require('./screens/images/AES.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.andon.com/manufacturers/abb-instrumentation/',
            )
          }>
          <Image
            resizeMode="contain"
            style={{width: 150, height: 150}}
            source={require('./screens/images/ABB.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.andon.com/manufacturers/crane/')
          }>
          <Image
            resizeMode="contain"
            style={{width: 150, height: 150}}
            source={require('./screens/images/Crane_Co._logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.andon.com/manufacturers/entegris/')
          }>
          <Image
            resizeMode="contain"
            style={{width: 150, height: 150}}
            source={require('./screens/images/entegris-logo-vector.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 0}} />
      <TouchableOpacity onPress={() => navigation.navigate('Contact us')}>
        <View style={styles.Button}>
          <Text style={{color: 'white', fontSize: 20}}>Contact Us</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
function NotificationScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate(Contact)}
        title="Go back home"
      />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
  return (
    // The outside view is a background container, Then anything inside will allow for input.
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Request a Quote" component={NewReq} />
        <Drawer.Screen name="Ask a Question" component={NewQuestion} />
        <Drawer.Screen name="Contact us" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Button: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 32,
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
});

export default App;
