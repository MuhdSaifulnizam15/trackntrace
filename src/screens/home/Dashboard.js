import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Background from '@components/Background';
import Logo from '../../components/Logo';

const Dashboard = ({navigation}) => {
  return (
    <Background>
      <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <Logo />
        <View
          style={{flex: 1, width: '100%', alignItems: 'center', marginTop: 20}}>
          <Text>Hello, John...</Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            Welcome back here
          </Text>

          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <View
              style={{
                width: '90%',
                height: '20%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SendParcel')}
                style={{
                  alignItems: 'center',
                  padding: 15,
                  width: '45%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Logo />
                <Text>Pick-up Request</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Track')}
                style={{
                  alignItems: 'center',
                  padding: 15,
                  width: '45%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Logo />
                <Text>Track Order</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '90%',
                height: '20%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <TouchableOpacity
                onPress={() => console.log('coming soon alert')}
                style={{
                  alignItems: 'center',
                  padding: 15,
                  width: '45%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Logo />
                <Text>Contact Support</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Account')}
                style={{
                  alignItems: 'center',
                  padding: 15,
                  width: '45%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Logo />
                <Text>My Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Dashboard;
