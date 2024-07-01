import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -270,
    left: 260,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'rgb(50, 8, 65)',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  topicTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: 'rgb(106, 90, 205)'
  },

  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(106, 90, 205)',
    borderRadius: 9,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  readMoreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 2,
    top: -10
  },
  readMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;