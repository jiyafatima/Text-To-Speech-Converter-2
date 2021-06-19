import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,ExpoFont
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var say = this.state.name;
    this.state.name === ''
      ? alert('Please Enter a word')
      : Speech.speak(say);
  };

  render() {
    return (
      <View style={styles.textContainer}>
        <Header
          backgroundColor={'green'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: 'black', fontSize: 15, fontWeight: 700 },
          }}
        />

        <Image
          style={styles.icon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />

        <Text style={styles.text}> Enter The Word </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Click Here To Hear Speech </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },

  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'green',
    marginTop: 80,
    alignSelf: 'center',
    height: 80,
  },
 
});
