import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const EditPropertyScreen = ({ route, navigation }) => {
    const { propertyId, title, description, rentPrice, location, videoURL } = route.params;

    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedRentPrice, setEditedRentPrice] = useState(rentPrice);
    const [editedLocation, setEditedLocation] = useState(location);
    const [editedVideoURL, setEditedVideoURL] = useState(videoURL);

    const saveChanges = () => {
        if (!editedTitle || !editedRentPrice || !editedLocation) {
            Alert.alert("Error", "Title, Rent Price, and Location are required fields.");
            return;
        }

        console.log('Saving Changes for Property ID:', propertyId, {
            editedTitle,
            editedDescription,
            editedRentPrice,
            editedLocation,
            editedVideoURL,
        });

        Alert.alert("Success", "Changes have been saved.");
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>Edit Property</Text>

                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={editedTitle}
                    onChangeText={setEditedTitle}
                    placeholder="Enter Property Title"
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    value={editedDescription}
                    onChangeText={setEditedDescription}
                    placeholder="Enter Property Description"
                    multiline
                />

                <Text style={styles.label}>Rent Price</Text>
                <TextInput
                    style={styles.input}
                    value={editedRentPrice}
                    onChangeText={setEditedRentPrice}
                    placeholder="Enter Rent Price"
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.input}
                    value={editedLocation}
                    onChangeText={setEditedLocation}
                    placeholder="Enter Location"
                />

                <Text style={styles.label}>Video URL</Text>
                <TextInput
                    style={styles.input}
                    value={editedVideoURL}
                    onChangeText={setEditedVideoURL}
                    placeholder="Enter Video URL"
                />

                <View style={styles.bottomButtonsContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.doneButton} onPress={saveChanges}>
                        <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9FAFB',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        alignSelf: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#444',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    backButton: {
        backgroundColor: '#CBD5E1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '45%',
        alignItems: 'center',
    },
    doneButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default EditPropertyScreen;
