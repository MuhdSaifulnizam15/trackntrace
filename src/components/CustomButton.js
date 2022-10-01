import {Button, StyleSheet, View} from 'react-native';

export default CustomButton = ({...props}) => {
  return (
    <View style={styles.container}>
      <Button
        style={[styles.button]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  }
});
