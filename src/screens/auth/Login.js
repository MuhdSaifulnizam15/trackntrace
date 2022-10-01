import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

import Background from '@components/Background';
import Logo from '@components/Logo';
import Input from '@components/Input';
import CustomButton from '@components/CustomButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {};

  return (
    <Background>
      <Logo />
      <Text>Please sign in to continue</Text>

      <Input
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>

      <Text style={{ color: 'darkgreen' }}>Forgot your password?</Text>
      </TouchableOpacity>

      <CustomButton
        onPress={() => {
          navigation.navigate('Dashboard')
        }}
        title="Login"
        style={{
          backgroundColor: 'green',
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'darkgreen' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Login;
