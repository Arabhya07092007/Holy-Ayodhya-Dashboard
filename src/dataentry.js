import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
} from 'react-native';
import { ref, onValue, push, set } from 'firebase/database';
import database from './config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        fontWeight: '600',
    },
});

function PlaceForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [ratings, setRatings] = useState('');
    const [reviews, setReviews] = useState('');
    const [direction, setDirection] = useState('');
    const [timings, setTimings] = useState('');
    const [wheelchair, setWheelchair] = useState('');
    const [parking, setParking] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [tickets, setTickets] = useState('');
    const [connectivity, setConnectivity] = useState('');
    const [category, setCategory] = useState('templgeges');

    const setData = () => {

        console.log(images.split("&&"));


        const postListRef = ref(database, 'TouristPlaces/' + category + '/');
        const newPostRef = push(postListRef);

        set(newPostRef, {
            name: name,
            address: address,
            ratings: ratings,
            reviews: reviews,
            direction: direction,
            timings: timings,
            wheelchair: wheelchair,
            parking: parking,
            description: description,
            images: images.split("&&"),
            tickets: tickets,
            connectivity: connectivity,
        });


        setName('');
        setAddress('');
        setRatings('');
        setReviews('');
        setDirection('');
        setTimings('');
        setWheelchair('');
        setParking('');
        setDescription('');
        setImages([]);
        setTickets('');
        setConnectivity('');


    };

    const showingData = () => {
        console.log(category)
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://shots.so/backgrounds/cosmic/original/5.jpg' }}
                style={{
                    width: '100%',
                    // height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <NavBar />

                <ScrollView
                    showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: '55%',
                        // justifyContent: 'center',
                        padding: 20,
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginTop: 100,
                        marginBottom: 50,
                        height: windowHeight - 150,
                    }}>
                    <View style={{ justifyContent: 'center' }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name of the Place"
                            placeholderTextColor="#888"
                            value={name}
                            onChangeText={(text) => {
                                setName(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            placeholderTextColor="#888"
                            value={address}
                            onChangeText={(text) => {
                                setAddress(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            placeholderTextColor="#888"
                            value={description}
                            onChangeText={(text) => {
                                setDescription(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Google maps location link"
                            placeholderTextColor="#888"
                            value={direction}
                            onChangeText={(text) => {
                                setDirection(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Ratings"
                            placeholderTextColor="#888"
                            value={ratings}
                            onChangeText={(text) => {
                                setRatings(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Reviews"
                            placeholderTextColor="#888"
                            value={reviews}
                            onChangeText={(text) => {
                                setReviews(text);
                            }}
                        />


                        <TextInput
                            style={styles.input}
                            placeholder="Operational Timings"
                            placeholderTextColor="#888"
                            value={timings}
                            onChangeText={(text) => {
                                setTimings(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Wheelchair Accessiblility"
                            placeholderTextColor="#888"
                            value={wheelchair}
                            onChangeText={(text) => {
                                setWheelchair(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Parking Accessiblility"
                            placeholderTextColor="#888"
                            value={parking}
                            onChangeText={(text) => {
                                setParking(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Tickets availability"
                            placeholderTextColor="#888"
                            value={tickets}
                            onChangeText={(text) => {
                                setTickets(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Connectivity"
                            placeholderTextColor="#888"
                            value={connectivity}
                            onChangeText={(text) => {
                                setConnectivity(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Images Urls"
                            placeholderTextColor="#888"
                            value={images}
                            onChangeText={(text) => {
                                setImages(text);
                            }}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 10 }}>

                            <TouchableOpacity
                                onPress={() => {
                                    setCategory("temples")
                                }}
                                style={[{
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                }, category == "temples" ? { backgroundColor: "#bc560a" } : { backgroundColor: "#fde58a" }]}>
                                <Text style={[{ fontWeight: "600" }, category == "temples" ? { color: "white" } : { color: "black" }]}>Temples</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setCategory("others")
                                }}
                                style={[{
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                }, category == "others" ? { backgroundColor: "#bc560a" } : { backgroundColor: "#fde58a" }]}>
                                <Text style={[{ fontWeight: "600" }, category == "others" ? { color: "white" } : { color: "black" }]}>Others</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setCategory("food")
                                }}
                                style={[{
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                }, category == "food" ? { backgroundColor: "#bc560a" } : { backgroundColor: "#fde58a" }]}>
                                <Text style={[{ fontWeight: "600" }, category == "food" ? { color: "white" } : { color: "black" }]}>Foods</Text>
                            </TouchableOpacity>


                        </View>

                        <Button
                            title="Submit"
                            onPress={() => {
                                setData();
                            }}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#FFFEDE',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: windowHeight,
    },
    input: {
        borderWidth: 1.2,
        padding: 10,
        borderRadius: 10,
        color: 'black',
        marginBottom: 10,
    },
});

export default PlaceForm;