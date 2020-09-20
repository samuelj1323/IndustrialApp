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
  Dimensions,
} from 'react-native';
import RNSmtpMailer from 'react-native-smtp-mailer';

const width1 = Dimensions.get('window');
const height = Dimensions.get('window');

export default class NewQuestion extends Component {
  state = {
    name: '',
    title: '',
    company: '',
    question: '',
    phone: '',
    email: '',
    city: '',
    state: '',
  };
  clearText = () => {
    this.setState({
      name: '',
      title: '',
      company: '',
      question: '',
      phone: '',
      email: '',
      city: '',
      state: '',
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <View style={[styles.backScreen, {height: 60}]} />
          <View style={styles.backScreen}>
            <Image source={require('./images/logo.png')} />
            <View style={{height: 30}} />
            <Text style={{fontSize: 30}}>Ask Us a Question</Text>

            <View style={{height: 20}} />
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
                onChangeText={(text) => this.setState({city: text})}
                value={this.state.city}
              />
              <TextInput
                placeholder="Company State"
                style={[styles.input, {width: 180}]}
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({state: text})}
                value={this.state.state}
              />
            </View>

            <TextInput
              placeholder="Ask Your Question Here!"
              style={[styles.input, {height: 300}]}
              placeholderTextColor="grey"
              multiline={true}
              onChangeText={(text) => this.setState({question: text})}
              value={this.state.question}
            />

            <View style={{height: 40}} />

            <TouchableOpacity
              onPress={() => {
                const Body =
                  'Name: ' +
                  this.state.name +
                  '<br>' +
                  'Title: ' +
                  this.state.title +
                  '<br>' +
                  'Company: ' +
                  this.state.company +
                  '<br>' +
                  'Phone: ' +
                  this.state.phone +
                  '<br>' +
                  'Email: ' +
                  this.state.email +
                  'General Area of where the company is: ' +
                  '<br>' +
                  'Company City: ' +
                  this.state.city +
                  ', Company State: ' +
                  this.state.state +
                  '<br> <br>' +
                  'Question: ' +
                  this.state.question;
                if (this.state.name === '') {
                  Alert.alert(
                    'We could not submit your question!',
                    'Please fill in your name in the appointed field.',
                  );
                } else if (this.state.company === '') {
                  Alert.alert(
                    'We could not submit your question! ',
                    'Please fill in your company in the appointed field.',
                  );
                } else if (this.state.phone === '') {
                  Alert.alert(
                    'We could not submit your question! ',
                    'Please fill in your phone number in the appointed field.',
                  );
                } else if (
                  this.state.email === '' ||
                  !this.state.email.includes('@') ||
                  !this.state.email.includes('.')
                ) {
                  Alert.alert(
                    'We could not submit your question! ',
                    'Please fill in your email in the appointed field.',
                  );
                } else if (this.state.question === '') {
                  Alert.alert(
                    'We could not submit your question! ',
                    'Please ask your question in the appointed field.',
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
                    subject:
                      'Asking a Question by ' +
                      this.state.name +
                      ' at ' +
                      this.state.company,
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
