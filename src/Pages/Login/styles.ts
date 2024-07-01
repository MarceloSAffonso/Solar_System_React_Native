import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000, // Alta prioridade para garantir que o Meteor passe na frente
  },
  form: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  label: {
    color: "#ffffff",
    marginBottom: 8,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    zIndex: 1,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 54,
    fontFamily: 'Roboto-Regular',
    zIndex: 1,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    backgroundColor: 'transparent',
    width: "100%",
    maxWidth: 300,
    zIndex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    zIndex: 1,
  },
});