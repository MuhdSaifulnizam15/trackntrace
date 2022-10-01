import {Image, KeyboardAvoidingView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import logo from '@assets/icons/logoipsum.png';
// import Svg from 'react-native-svg';

export default Logo = ({children}) => {
  return (
    <Image source={logo} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
  },
});
