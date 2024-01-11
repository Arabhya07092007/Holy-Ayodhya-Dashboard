import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';

class NavBar extends React.Component {
  render() {
    return (
      <View style={styless.navBar}>


        <Text style={styless.navText}>Holy Ayodhya Dashboard</Text>

      </View>
    );
  }
}

const styless = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#6200ee',
    flex: 1,
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  navItem: {
    // flex: 1,
    // alignItems: 'center',
    // padding: 10,
  },
  navText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: "600",

  },
});

class PlaceForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://shots.so/backgrounds/cosmic/original/5.jpg" }} style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
          <NavBar />

          <View
            style={{
              width: '60%',
              justifyContent: 'center',
              padding: 20,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 100
            }}>
            <Text>Name:</Text>
            <TextInput style={styles.input} />

            <Text>Address:</Text>
            <TextInput style={styles.input} />

            <Text>Ratings:</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text>Stars:</Text>
            <TextInput style={styles.input} keyboardType="numeric" />

            <Text>Reviews:</Text>
            <TextInput style={styles.input} multiline />

            <Text>Distance:</Text>
            <TextInput style={styles.input} />

            <Text>Direction:</Text>
            <TextInput style={styles.input} />

            <Text>Timings:</Text>
            <TextInput style={styles.input} />

            <Text>Wheelchair Availability:</Text>
            <TextInput style={styles.input} />

            <Text>Parking Availability:</Text>
            <TextInput style={styles.input} />

            <Text>Description:</Text>
            <TextInput style={styles.input} multiline />

            <Text>Images:</Text>
            <TextInput style={styles.input} />

            <Text>Tickets Description:</Text>
            <TextInput style={styles.input} multiline />

            <Text>Connectivity Description:</Text>
            <TextInput style={styles.input} multiline />

            <Button title="Submit" onPress={() => { alert("this is an alert") }} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#FDFAE7', // light gray background
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  input: {
    height: 40,
    borderColor: '#6200ee', // purple border
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5, // rounded corners
    backgroundColor: '#fff', // white background
    shadowColor: '#000', // shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#000', // black text
  },
});

export default PlaceForm;
