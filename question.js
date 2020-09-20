import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import RNSmtpMailer from 'react-native-smtp-mailer';

export default class Question extends Component {
  state = {
    name: '',
    company: '',
    Question: '',
    comm: '',
  };
  clearText = () => {
    this.setState({name: '', company: '', Question: ''});
  };
  /*
  DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {' '}
      {children}
    </TouchableWithoutFeedback>
  );*/
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text style={{fontSize: 36}}>Submit a Question: </Text>
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
                <Text />
                <Text />

                <TextInput
                  style={{
                    width: 380,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    fontSize: 16,
                  }}
                  placeholder="Name..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({name: text})}
                  value={this.state.name}
                />
                <Text />
                <TextInput
                  style={{
                    width: 380,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    fontSize: 16,
                  }}
                  placeholder="Company..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({company: text})}
                  value={this.state.company}
                />
                <Text />
                <TextInput
                  style={{
                    width: 380,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    fontSize: 16,
                  }}
                  placeholder="Phone/Email..."
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({comm: text})}
                  value={this.state.company}
                />
                <Text />
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    height: 400,
                    borderRadius: 5,
                    fontSize: 16,
                  }}
                  multiline={true}
                  placeholder="Ask us a Question!"
                  placeholderTextColor="black"
                  onChangeText={(text) => this.setState({Question: text})}
                  value={this.state.Question}
                />
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
            color="black"
            title="Submit"
            onPress={() => {
              const Body =
                'Name: ' +
                this.state.name +
                '<br>' +
                'Company: ' +
                this.state.company +
                '<br> <br>' +
                'Question: ' +
                this.state.Question +
                '<br>';
              if (this.state.name === '') {
                Alert.alert(
                  'Could not submit question, the name field was not filled out.',
                );
              } else if (this.state.company === '') {
                Alert.alert(
                  'Could not submit question, the company field was not filled out.',
                );
              } else if (this.state.comm === '') {
                Alert.alert(
                  'Could not submit question, the phone/email field was not filled out.',
                );
              } else if (this.state.Question === '') {
                Alert.alert(
                  "Could not submit question, you didn't submit a question.",
                );
              } else {
                RNSmtpMailer.sendMail({
                  mailhost: 'smtp.gmail.com',
                  port: '465',
                  ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
                  username: 'andonspecialties1323@gmail.com',
                  password: 'gr8Db890214!',
                  from: 'andonspecialties1323@gmail.com',
                  recipients: 'samuelj1323@gmail.com',
                  bcc: [], //completely optional
                  subject: 'Asking a Question by ' + this.state.name,
                  htmlBody: Body,
                  attachmentPaths: [],
                  attachmentNames: [], //only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[]
                  attachmentTypes: [], //needed for android, in ios-only application, leave it empty: attachmentTypes:[]. Generally every img(either jpg, png, jpeg or whatever) file should have "img", and every other file should have its corresponding type.
                })
                  .then((success) => console.log(success))
                  .catch((err) => console.log(err));
                this.clearText();
                Alert.alert('Question was Submitted!');
              }
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
