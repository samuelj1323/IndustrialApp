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
import ImagePicker from 'react-native-image-picker';
import RNSmtpMailer from 'react-native-smtp-mailer';
export default class NewReq extends Component {
  state = {
    avatarSource1: null,
    avatarSource2: null,
    avatarSource3: null,
    name: '',
    company: '',
    title: '',
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
  DimissKeyboard = ({children}) => {
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {' '}
      {children}
    </TouchableWithoutFeedback>;
  };
  clearText = () => {
    this.setState({
      avatarSource1: null,
      avatarSource2: null,
      avatarSource3: null,
      name: '',
      title: '',
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
        <ScrollView>
          <View style={[styles.backScreen, {height: 60}]} />
          <View style={styles.backScreen}>
            <Image source={require('./images/logo.png')} />
            <Text style={{fontSize: 36}}>Request a Quote</Text>
            <View style={{height: 30}} />
            <TextInput
              placeholder="Name"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.name}
            />
            <TextInput
              placeholder="Job Title"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={(text) => this.setState({title: text})}
              value={this.state.title}
            />
            <TextInput
              placeholder="Company Name"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={(text) => this.setState({company: text})}
              value={this.state.company}
            />
            <View style={styles.sideways}>
              <TextInput
                placeholder="Phone"
                style={[styles.input, {width: 180}]}
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({phone: text})}
                value={this.state.phone}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Email"
                style={[styles.input, {width: 180}]}
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.sideways}>
              <TextInput
                placeholder="Company City"
                style={[styles.input, {width: 180}]}
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({address1: text})}
                value={this.state.address1}
              />
              <TextInput
                placeholder="Company State"
                style={[styles.input, {width: 180}]}
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({address2: text})}
                value={this.state.address2}
              />
            </View>

            <TextInput
              placeholder="Describe your issue"
              style={[styles.input, {height: 200}]}
              placeholderTextColor="grey"
              multiline={true}
              onChangeText={(text) => this.setState({comments: text})}
              value={this.state.comments}
            />
            <View style={styles.sideways}>
              <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={styles.box}>
                  {this.state.avatarSource1 === null ? (
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      Select Photo
                    </Text>
                  ) : (
                    <Image
                      style={{width: 120, height: 120, borderRadius: 15}}
                      source={this.state.avatarSource1}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <View style={{width: 10}} />
              <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
                <View style={styles.box}>
                  {this.state.avatarSource2 === null ? (
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      Select Photo
                    </Text>
                  ) : (
                    <Image
                      style={{width: 120, height: 120, borderRadius: 15}}
                      source={this.state.avatarSource2}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View style={{width: 10}} />

              <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
                <View style={styles.box}>
                  {this.state.avatarSource3 === null ? (
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      Select Photo
                    </Text>
                  ) : (
                    <Image
                      style={{width: 120, height: 120, borderRadius: 15}}
                      source={this.state.avatarSource3}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{height: 40}} />

            <TouchableOpacity
              onPress={() => {
                const emailBody =
                  'Name: ' +
                  this.state.name +
                  '<br>' +
                  'Company: ' +
                  this.state.company +
                  '<br>' +
                  'Title: ' +
                  this.state.title +
                  '<br>' +
                  'Phone: ' +
                  this.state.phone +
                  '<br>' +
                  'Email: ' +
                  this.state.email +
                  '<br>' +
                  'Business City: ' +
                  this.state.address1 +
                  '<br>' +
                  'Business State: ' +
                  this.state.address2 +
                  '<br>' +
                  '<br>' +
                  'Additional Customer Comments: ' +
                  this.state.comments +
                  '<br> <br> <br> The images go in this order: Image1, Image2, Image3. If this is off an apple device, the program could not rename the pictures.';
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
                    'Could not submit your request',
                    'The name field is not complete.',
                  );
                } else if (this.state.company === '') {
                  Alert.alert(
                    'Could not submit your request',
                    'The company field is not complete.',
                  );
                } else if (this.state.phone === '') {
                  Alert.alert(
                    'Could not submit your request',
                    'The phone field is not complete.',
                  );
                } else if (
                  this.state.email === '' ||
                  !this.state.email.includes('@') ||
                  !this.state.email.includes('.')
                ) {
                  Alert.alert(
                    'Could not submit your request',
                    'The email field is not complete.',
                  );
                } else if (this.state.address1 === '') {
                  Alert.alert(
                    'Could not submit your request',
                    'The city field is not complete.',
                  );
                } else if (this.state.address2 === '') {
                  Alert.alert(
                    'Could not submit your request',
                    'The state field is not complete.',
                  );
                } else {
                  RNSmtpMailer.sendMail({
                    mailhost: 'smtp.gmail.com',
                    port: '465',
                    ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
                    username: '',
                    password: '',
                    from: '',
                    recipients: '',
                    bcc: [], //completely optional
                    subject:
                      'Requesting a Quote from ' +
                      this.state.name +
                      ' at ' +
                      this.state.company,
                    htmlBody: emailBody,
                    attachmentPaths: [pathString1, pathString2, pathString3],
                    attachmentNames: ['image1.img', 'image2', 'drawing'], //only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[]
                    attachmentTypes: ['jpg'], //needed for android, in ios-only application, leave it empty: attachmentTypes:[]. Generally every img(either jpg, png, jpeg or whatever) file should have "img", and every other file should have its corresponding type.
                  })
                    .then((success) => console.log(success))
                    .catch((err) => console.log(err));
                  this.clearText();
                  Alert.alert('Your request for a quote has been submitted!');
                }
              }}>
              <View style={styles.button}>
                <Text style={{fontSize: 20, color: 'white'}}> Submit </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.backScreen, {height: 300}]} />
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  backScreen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    backgroundColor: 'whitesmoke',
    color: 'black',
    height: 40,
    width: 380,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  button: {
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 7,
  },
  sideways: {
    width: 380,
    flexDirection: 'row',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
});
