import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const properties = [
    {
        id: '1',
        type: '1 Room',
        location: 'Lalitpur, Ekantakuna',
        price: '7,000/Month',
        status: 'Available',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmySnbVFFNpt7pN_bGzGHhxa6AUKpU88CHTg&s',
    },
    {
        id: '2',
        type: '1BHK Flat',
        location: 'Lalitpur-03, Nakhu',
        price: '5,000/Month',
        status: 'Available',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/347702650.jpg?k=914706a5152989aacc5c1e9de70820257ab46c2749a2a7b1638dca1d58a948e4&o=&hp=1',
    },
    {
        id: '3',
        type: '1BHK Flat',
        location: 'Kirtipur-03, Dhalpa',
        price: '7,000/Month',
        status: 'Booked',
        image: 'https://nepalpropertybazaar.com/wp-content/uploads/2024/08/1BK-Top-Floor-Brand-New-Flat-Rent-in-Bhaisepati-Nakkhu-Lalitpur-2-592x444.jpg',
    },
];

const HomeScreen = ({ navigation }) => {
    const handlePropertyPress = (item) => {
        Alert.alert('Property Clicked', `You clicked on ${item.type}`);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePropertyPress(item)}>
            <View style={styles.propertyContainer}>
                <Image source={{ uri: item.image }} style={styles.propertyImage} />
                <View style={styles.propertyDetails}>
                    <Text style={styles.propertyType}>{item.type}</Text>
                    <Text style={styles.propertyLocation}>
                        <Ionicons name="location-sharp" size={16} color="green" /> {item.location}
                    </Text>
                    <Text style={styles.propertyPrice}>Price = {item.price}</Text>
                    <Text style={[styles.propertyStatus, { color: item.status === 'Available' ? 'green' : 'red' }]}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="menu" size={28} color="black" />
                    <View style={styles.locationContainer}>
                        <Text style={styles.headerText}>Current Location</Text>
                        <View style={styles.locationRow}>
                            <Ionicons name="location-sharp" size={16} color="green" />
                            <Text style={styles.locationText}>Dhobidhara</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Properties you have added</Text>

                {/* Property List */}
                <FlatList
                    data={properties}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContainer}
                />

                {/* Bottom Navigation */}
                <View style={styles.bottomNavigation}>
                    <Ionicons name="home" size={24} color="green" />
                    <Ionicons name="add-circle" size={24} color="black" />
                    <Ionicons name="list" size={24} color="black" />
                    <Ionicons name="person" size={24} color="black" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        backgroundColor: '#e0e0ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationContainer: {
        marginLeft: 8,
    },
    headerText: {
        fontSize: 12,
        color: 'grey',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    locationText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginVertical: 10,
    },
    listContainer: {
        padding: 16,
    },
    propertyContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    propertyImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 16,
    },
    propertyDetails: {
        flex: 1,
    },
    propertyType: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    propertyLocation: {
        fontSize: 14,
        color: 'grey',
        marginVertical: 4,
    },
    propertyPrice: {
        fontSize: 14,
        color: '#333',
    },
    propertyStatus: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: 'bold',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e0e0e0',
        padding: 12,
    },
});

export default HomeScreen;
