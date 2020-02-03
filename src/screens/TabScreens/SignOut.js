import React, {Component} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import Firebase from '../../config/Firebase';
export default class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = async () => {
    try {
      await Firebase.auth().signOut();
      this.props.navigation.navigate('Login');
    } catch (error) {
      const {message} = error;
      Alert.alert(message);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.logout} title="Sign Out" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
