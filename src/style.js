import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  heading: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  navItem: {
    color: 'white',
    marginLeft: 20,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
  },
  image: {
    width: '100%',
    height: 80,
    marginBottom: 10,
    borderRadius: 2,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '300',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  codeText: {
    color: '#fff',
    fontFamily: 'monospace',
  },
  techStackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  skillItem: {
    color: 'black',
    fontSize: 16,
    backgroundColor: 'white',
    margin: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  social: {
    color: 'white',
  },
  footer: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#212121',
  },
});
