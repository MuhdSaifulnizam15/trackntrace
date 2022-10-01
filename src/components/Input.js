import {StyleSheet, TextInput, View} from 'react-native';

export default Input = ({errorText, description, customStyle, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, customStyle]}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  description: {
    fontSize: 12,
    color: 'lightgreen',
    paddingTop: 8,
  },
  error: {
    fontSize: 12,
    color: 'red',
    paddingTop: 8,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  }
});
