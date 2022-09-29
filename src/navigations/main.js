
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '@screens/auth/Login';
import Register from '@screens/auth/Register';
import ForgotPassword from '@screens/auth/ForgotPassword';
import ResetPassword from '@screens/auth/ResetPassword';
import Tabs from './tabs';
import Account from '@screens/home/Account';
import AccountDetail from '@screens/home/AccountDetail';
import MyDelivery from '@screens/home/MyDelivery';
import SendParcel from '@screens/home/SendParcel';
import SendPayment from '@screens/home/SendPayment';
import SendSummary from '@screens/home/SendSummary';
import Track from '@screens/home/Track';
import TrackStatus from '@screens/home/TrackStatus';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // to use for session, probably implemented inside store contexts
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      { isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </>
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="AccountDetail" component={AccountDetail} />
          <Stack.Screen name="MyDelivery" component={MyDelivery} />
          <Stack.Screen name="SendParcel" component={SendParcel} />
          <Stack.Screen name="SendPayment" component={SendPayment} />
          <Stack.Screen name="SendSummary" component={SendSummary} />
          <Stack.Screen name="Track" component={Track} />
          <Stack.Screen name="TrackStatus" component={TrackStatus} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Navigation;