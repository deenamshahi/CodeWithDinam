import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
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
        price: '12,000/Month',
        status: 'Available',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/347702650.jpg?k=914706a5152989aacc5c1e9de70820257ab46c2749a2a7b1638dca1d58a948e4&o=&hp=1',
    },
    {
        id: '3',
        type: '1BHK Flat',
        location: 'Kirtipur-03, Dhalpa',
        price: '10,000/Month',
        status: 'Booked',
        image: 'https://nepalpropertybazaar.com/wp-content/uploads/2024/08/1BK-Top-Floor-Brand-New-Flat-Rent-in-Bhaisepati-Nakkhu-Lalitpur-2-592x444.jpg',
    },
    {
        id: '4',
        type: '2BHK Flat',
        location: 'Bhaktapur, Suryabinayak',
        price: '18,000/Month',
        status: 'Available',
        image: 'https://i.ytimg.com/vi/rveZhUyxC-c/maxresdefault.jpg',
    },
    {
        id: '5',
        type: 'Studio Apartment',
        location: 'Maharajgunj, Kathmandu',
        price: '25000/Month',
        status: 'Booked',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460012103.jpg?k=af0af68579988abb81deb922c23653b2cc6749b4d547602c03b8f4186f126af5&o=&hp=1',
    },
    {
        id: '6',
        type: '2BHK Flat',
        location: 'Lalitpur, Satdobato',
        price: '20,000/Month',
        status: 'Available',
        image: 'https://i.pinimg.com/736x/84/cd/f5/84cdf50868238a908da5c48cd3ba9483.jpg',
    },
];

const HomeScreen = ({ navigation }) => {
    const handlePropertyPress = (item) => {
        // Navigate to PropertyDescription screen and pass property data
        navigation.navigate('PropertyDescription', { property: item });
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
            <View style={styles.header}>
                <View style={styles.locationContainer}>
                    <Text style={styles.headerText}>Current Location</Text>
                    <View style={styles.locationRow}>
                        <Ionicons name="location-sharp" size={16} color="green" />
                        <Text style={styles.locationText}>Dhobidhara, Kathmandu</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={properties}
                ListHeaderComponent={
                    <Text style={styles.propertiesHeader}>Properties you have added</Text>
                }
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingTop: 70,
        paddingBottom: 18,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#b5c7eb',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    locationContainer: {
        marginLeft: 5,
    },
    headerText: {
        fontSize: 16,
        marginBottom: 6,
        color: 'green',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    locationText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'normal',
        marginLeft: 4,
    },
    listContainer: {
        paddingTop: 95,
        paddingHorizontal: 16,
    },
    propertiesHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#333',
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
});

export default HomeScreen;
