import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSaveChanges = () => {
        // Basic validation for empty username
        if (!username.trim()) {
            Alert.alert('Error', 'Please enter a valid username.');
            return;
        }

        setIsSubmitting(true);

        // Here you would typically send the new username to the backend
        // Example: await updateProfile(username);

        setTimeout(() => {
            setIsSubmitting(false);
            Alert.alert('Success', 'Your profile has been updated.');
            navigation.goBack(); // Navigate back to Profile screen after saving
        }, 1000); // Simulate a network request with a delay
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Username</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter new username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={[styles.button, isSubmitting && styles.disabledButton]}
                onPress={handleSaveChanges}
                disabled={isSubmitting}
            >
                <Text style={styles.buttonText}>
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#6A8DB5',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#B0C4DE', // Lighter blue for disabled button
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default EditProfileScreen;
