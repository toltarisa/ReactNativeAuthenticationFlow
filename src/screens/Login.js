import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';

import {useForm} from 'react-hook-form';
import Firebase from '../config/Firebase';

export default function Login({navigation}) {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = async data => {
    const {email, password} = data;
    try {
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(response);
      if (response) {
        Alert.alert('Giriş Başarılı');
        navigation.navigate('App');
      }
    } catch (error) {
      const {message} = error;
      Alert.alert(message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login Form</Text>
      <TextInput
        ref={register({name: 'email'}, {required: true})}
        onChangeText={text => setValue('email', text, true)}
        style={styles.userName}
        placeholder="Email"
      />
      {errors.email && <Text>This is required.</Text>}

      <TextInput
        ref={register({name: 'password'}, {required: true})}
        onChangeText={text => setValue('password', text)}
        secureTextEntry={true}
        style={styles.password}
        placeholder="Password"
      />
      {errors.password && <Text>Password is required.</Text>}

      <TouchableOpacity style={styles.login} onPress={handleSubmit(onSubmit)}>
        <Text style={{color: '#aaa'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: '#aaa'}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 45,
    borderColor: '#ccc',
  },
  password: {
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    height: 45,
    borderColor: '#ccc',
  },
  login: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 10,
  },
  signup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 10,
  },
  loginText: {
    fontSize: 40,
    marginBottom: 20,
  },
});
