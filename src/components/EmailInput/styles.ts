import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 54,
    fontFamily: 'Roboto-Regular',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: -10,
    marginBottom: 10,
  },
});