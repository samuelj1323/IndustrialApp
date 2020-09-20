import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {KeyboardAccessoryNavigation} from 'react-native-keyboard-accessory';
// to make the Name not hide away, Look into other solutions with avoiding keyboard view
import ImagePicker from 'react-native-image-picker';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

//var mailer = require('NativeModule').RNMail;

import RNSmtpMailer from 'react-native-smtp-mailer';
import RNFS from 'react-native-fs';
//import ResponsiveKeyboardView from 'react-native-responsive-keyboard-view';
export default class Request extends Component {
  state = {
    avatarSource1: null,
    avatarSource2: null,
    avatarSource3: null,
    name: '',
    company: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    comments: '',
  };

  constructor(props) {
    super(props);
    this.selectPhotoTapped1 = this.selectPhotoTapped1.bind(this);
    this.selectPhotoTapped2 = this.selectPhotoTapped2.bind(this);
    this.selectPhotoTapped3 = this.selectPhotoTapped3.bind(this);
  }

  DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {' '}
      {children}
    </TouchableWithoutFeedback>
  );
  clearText = () => {
    this.setState({
      avatarSource1: null,
      avatarSource2: null,
      avatarSource3: null,
      name: '',
      company: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      comments: '',
    });
  };

  selectPhotoTapped1() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource1: source,
        });
      }
    });
  }
  selectPhotoTapped2() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource2: source,
        });
      }
    });
  }
  selectPhotoTapped3() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource3: source,
        });
      }
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 200}} />
          <Text style={{fontSize: 200}} />
          <Text style={{fontSize: 200}} />
          <Text style={{color: 'black', fontSize: 36}}>Request Info</Text>

          <KeyboardAvoidingView>
            <View
              style={{
                backgroundColor: 'lightcoral',
                width: 400,
                height: 650,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ScrollView
                style={{
                  marginHorizontal: 10,
                  backgroundColor: 'lightcoral',
                }}>
                <Text />
                <TextInput
                  placeholder=" Name..."
                  // onChangeText={(text) => SafeAr}
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({name: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.name}
                />

                <Text />

                <TextInput
                  placeholder=" Company..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({company: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.company}
                />

                <Text />
                <TextInput
                  placeholder=" Phone..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({phone: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.phone}
                />
                <Text />
                <TextInput
                  placeholder=" Email..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({email: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.email}
                />
                <Text />
                <TextInput
                  placeholder=" Address line 1..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({address1: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.address1}
                />
                <Text />
                <TextInput
                  placeholder=" Address line 2..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({address2: text})}
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  value={this.state.address2}
                />
                <Text />
                <Text style={{height: 140}} />

                <TextInput
                  multiline={true}
                  placeholder=" Additional Info"
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({comments: text})}
                  style={{
                    width: 380,
                    backgroundColor: 'white',
                    height: 200,
                    borderRadius: 5,
                    fontSize: 20,
                  }}
                  keyboardType="email-address"
                  value={this.state.comments}
                  onEndEditing={() => Keyboard.dismiss()}
                />

                <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'white',
                      position: 'absolute',
                      bottom: 230,
                      left: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    {this.state.avatarSource1 === null ? (
                      <Text style={{fontSize: 20, textAlign: 'center'}}>
                        Select Photo
                      </Text>
                    ) : (
                      <Image
                        style={{width: 100, height: 100, borderRadius: 5}}
                        source={this.state.avatarSource1}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'white',
                      position: 'absolute',
                      bottom: 230,
                      left: 140,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    {this.state.avatarSource2 === null ? (
                      <Text style={{fontSize: 20, textAlign: 'center'}}>
                        Select Photo
                      </Text>
                    ) : (
                      <Image
                        style={{width: 100, height: 100, borderRadius: 5}}
                        source={this.state.avatarSource2}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'white',
                      position: 'absolute',
                      bottom: 230,

                      left: 270,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    {this.state.avatarSource3 === null ? (
                      <Text style={{fontSize: 20, textAlign: 'center'}}>
                        Add Drawing
                      </Text>
                    ) : (
                      <Image
                        style={{width: 100, height: 100, borderRadius: 5}}
                        source={this.state.avatarSource3}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
              </ScrollView>
            </View>
          </KeyboardAvoidingView>

          <Button
            title="Submit"
            color="black"
            onPress={() => {
              const emailBody =
                'Name: ' +
                this.state.name +
                '<br>' +
                'Company: ' +
                this.state.company +
                '<br>' +
                'Phone: ' +
                this.state.phone +
                '<br>' +
                'Email: ' +
                this.state.email +
                '<br>' +
                'Address line 1: ' +
                this.state.address1 +
                '<br>' +
                'Address line 2: ' +
                this.state.address2 +
                '<br>' +
                '<br>' +
                'Additional Customer Comments: ' +
                this.state.comments +
                '<br> <br> <br> The images go in this order: Image1, Image2, Drawing. If this is off an apple device, the program could not rename the pictures.';
              let pathString1;
              if (this.state.avatarSource1 !== null) {
                pathString1 = this.state.avatarSource1['uri'];
                pathString1 = pathString1.substring(7);
              } else {
                pathString1 = '';
              }
              let pathString2;
              if (this.state.avatarSource2 !== null) {
                pathString2 = this.state.avatarSource2['uri'];
                pathString2 = pathString2.substring(7);
              } else {
                pathString2 = '';
              }
              let pathString3;
              if (this.state.avatarSource3 !== null) {
                pathString3 = this.state.avatarSource3['uri'];
                pathString3 = pathString3.substring(7);
              } else {
                pathString3 = '';
              }
              if (this.state.name === '') {
                Alert.alert(
                  'Could not submit your request, the name field is not complete.',
                );
              } else if (this.state.company === '') {
                Alert.alert(
                  'Could not submit your request, the company field is not complete.',
                );
              } else if (this.state.phone === '') {
                Alert.alert(
                  'Could not submit your request, the phone field is not complete.',
                );
              } else if (this.state.email === '') {
                Alert.alert(
                  'Could not submit your request, the email field is not complete.',
                );
              } else if (this.state.address1 === '') {
                Alert.alert(
                  'Could not submit your request, the address1 field is not complete.',
                );
              } else if (this.state.address2 === '') {
                Alert.alert(
                  'Could not submit your request, the address2 field is not complete.',
                );
              } else {
                RNSmtpMailer.sendMail({
                  mailhost: 'smtp.gmail.com',
                  port: '465',
                  ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
                  username: 'andonspecialties1323@gmail.com',
                  password: 'gr8Db890214!',
                  from: 'andonspecialties1323@gmail.com',
                  recipients: 'Jimmahan@andon.com',
                  bcc: [], //completely optional
                  subject: 'Requesting a Quote by ' + this.state.company,
                  htmlBody: emailBody,
                  attachmentPaths: [pathString1, pathString2, pathString3],
                  attachmentNames: ['image1.img', 'image2', 'drawing'], //only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[]
                  attachmentTypes: ['jpg'], //needed for android, in ios-only application, leave it empty: attachmentTypes:[]. Generally every img(either jpg, png, jpeg or whatever) file should have "img", and every other file should have its corresponding type.
                })
                  .then((success) => console.log(success))
                  .catch((err) => console.log(err));
                this.clearText();
                Alert.alert('Your Request for a quote has been submitted!');
              }
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
